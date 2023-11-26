import {useRecoilValue} from 'recoil';

import {langState} from '@modules/atoms';
import {MyPageString} from '@utils/constants/strings';
import {Container, Logo} from './styles';

const MyPageView = () => {
  const lang = useRecoilValue(langState);

  return (
    <Container>
      <Logo>{MyPageString({lang: lang, key: 'title'})}</Logo>
    </Container>
  );
};

export default MyPageView;
