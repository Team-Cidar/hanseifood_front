// MyPageView.tsx

import React, { useEffect, useState } from 'react';
import { Container, Logo, Button } from './styles';
import { Link } from 'react-router-dom';
import {useRecoilState, useRecoilValue} from 'recoil';

import {langState, userState} from '@modules/atoms';
import {MyPageString} from '@utils/constants/strings';
import PageLogo from '@components/PageLogo';
import {Divider} from '@components/Divider';
import {ListButton} from '@components/ListButton';
import {User} from '@type/index';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const MyPageView = () => {
  const navigate = useNavigate();
  const lang = useRecoilValue(langState);
  const [{page}, set_page] = useRecoilState<User>(userState);
  const [Login, setLogin] = useState('False');

  useEffect(() => {
    const data = {"token": localStorage.getItem('accessToken')};
    // 페이지 최초 렌더링 시에 실행될 코드
    const verifyToken = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/token/verify',data);

        if (response.status === 200) {
          setLogin('True');
        } else {
          setLogin('False');
        }
      } catch (error) {
        setLogin('False');
      }
    };

    verifyToken();
  }, []);

  const handleNavigate = (name: string) => {
    set_page({page: name});
    navigate(`/${name}`);
  };

  return (
    <Container>
      <Button as={Link} to="/back-office">
        BackOffice로 이동
      </Button>
      <PageLogo
        title={MyPageString({lang: lang, key: 'title'})}
        subtitle={``}
      />
      {Login === 'False' ? (
      <ListButton
        label={MyPageString({lang: lang, key: 'listbutton.label.login'})}
        onClick={() => handleNavigate('login')}
      />
      ) : (
        <ListButton
        label={MyPageString({lang: lang, key: 'listbutton.label.logout'})}
        onClick={() => {if (confirm("정말 로그아웃 하시겠습니까?") == true){
          localStorage.clear();
          window.location.href = "https://kauth.kakao.com/oauth/logout?client_id=c8300aee5549fc7db67a25a714144789&logout_redirect_uri=http://localhost:8080";
        }}}
      />
      )
      }
      <Divider />
      <div>
        <ListButton
          label={MyPageString({lang: lang, key: 'listbutton.label.tickets'})}
        />
      </div>
      <Divider />
      <div>
        <ListButton
          label={MyPageString({lang: lang, key: 'listbutton.label.help'})}
          onClick={() => handleNavigate('help')}
        />
        <ListButton
          label={MyPageString({lang: lang, key: 'listbutton.label.aboutme'})}
          onClick={() => handleNavigate('about-me')}
        />
      </div>
    </Container>
  );
};

export default MyPageView;
