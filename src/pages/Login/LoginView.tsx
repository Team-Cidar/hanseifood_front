import {useRecoilValue, useSetRecoilState} from 'recoil';

import {Container, Title} from './Login.styled';
import {langState} from '@modules/atoms';
import {Lang} from '@type/index';
import {LoginString} from '@utils/constants/strings';

export const LoginView = () => {
  const lang = useRecoilValue<Lang>(langState);

  return (
    <Container>
      <Title>{LoginString({lang: lang, key: 'title.direction.kakao'})}</Title>
    </Container>
  );
};
