import {useRecoilValue} from 'recoil';
import {LoginView} from './LoginView';
import {Lang} from '@type/index';
import {langState} from '@modules/atoms';

const Login = () => {
  const lang = useRecoilValue<Lang>(langState);

  const onLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const env = process.env;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${env.KAKAO_API_KEY}&redirect_uri=${env.KAKAO_REDIRECT_URL}`;
  };

  return <LoginView onLoginClick={onLoginClick} />;
};

export default Login;
