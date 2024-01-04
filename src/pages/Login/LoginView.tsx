import { Container, Content, Title } from './Login.styled';
import { Lang } from '@type/index';
import { LoginString } from '@utils/constants/strings';
import { IconButton } from '@components/Button';
import SvgIcon from '@components/SvgIcon';

type LoginPageProps = {
  lang: Lang;
  handleLogin: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const LoginView = ({handleLogin, lang}: LoginPageProps) => {
  return (
    <Container>
      <Content $display={true}>
        <Title>{LoginString({lang: lang, key: 'title.direction.kakao'})}</Title>
        <IconButton
          label={LoginString({lang: lang, key: 'button.label.kakao'})}
          backgroundColor="#FEE500"
          color="#191919"
          borderWidth="0px"
          width="100%"
          svg={
            <SvgIcon name={'kakao'} width={20} height={20} fill={'#000000'} />
          }
          onClick={e => handleLogin(e!)}
        />
      </Content>
    </Container>
  );
};
