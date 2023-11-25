import {useRecoilState, useRecoilValue} from 'recoil';
import {Container, Logo} from './Home.styled';
import {langState} from '@modules/atoms';
import {Lang} from '@type/index';
import {HomeString} from '@utils/constants/strings';

export const HomeView = () => {
  const lang = useRecoilValue<Lang>(langState);

  return (
    <Container>
      <Logo>{HomeString({lang: lang, key: 'title'})}</Logo>
    </Container>
  );
};
