import {useRecoilValue} from 'recoil';
import {LoginView} from './LoginView';
import {Lang} from '@type/index';
import {langState} from '@modules/atoms';

const Login = () => {
  const lang = useRecoilValue<Lang>(langState);
  const kakaoApiKey = process.env.KAKAO_API_KEY;
  const kakaoRedirectUrl = process.env.KAKAO_REDIRECT_URL;

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoApiKey}&redirect_uri=${kakaoRedirectUrl}`;
  };

  return <LoginView lang={lang} handleLogin={handleLogin} />;
};

export default Login;
