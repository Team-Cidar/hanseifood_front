import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import {langState} from '@modules/atoms';
import {IconButton} from '@components/Button';
import {MyPageString} from '@utils/constants/strings';
import {Container, Logo} from './styles';

const MyPageView = () => {
  const lang = useRecoilValue(langState);
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>{MyPageString({lang: lang, key: 'title'})}</Logo>
      <IconButton label="Go to login" onClick={() => navigate('/login')} />
      {/* temp button to go to login page */}
    </Container>
  );
};

export default MyPageView;
