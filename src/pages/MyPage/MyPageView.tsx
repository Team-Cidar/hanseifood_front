import {useRecoilState, useRecoilValue} from 'recoil';

import {langState, userState} from '@modules/atoms';
import {MyPageString} from '@utils/constants/strings';
import {Container, Logo} from './styles';
import PageLogo from '@components/PageLogo';
import {Divider} from '@components/Divider';
import {ListButton} from '@components/ListButton';
import { User } from '@type/index';
import { useNavigate } from 'react-router-dom';

const MyPageView = () => {
  const navigate = useNavigate();
  const lang = useRecoilValue(langState);
  const [{page}, set_page] = useRecoilState<User>(userState);

  const handleNavigate = (name: string) => {
    set_page({ page: name });
    navigate(`/${name}`);
  };

  return (
    <Container>
      <PageLogo
        title={MyPageString({lang: lang, key: 'title'})}
        subtitle={''}
      />
      <ListButton label={'로그인'} onClick={() => handleNavigate('login')} />
      <Divider />
      <div>
        <ListButton label={'구매 내역'} />
      </div>
      <Divider />
      <div>
        <ListButton label={'도움말'} onClick={() => handleNavigate('help')} />
        <ListButton label={'About me'} onClick={() => handleNavigate('about-me')} />
      </div>
    </Container>
  );
};

export default MyPageView;
