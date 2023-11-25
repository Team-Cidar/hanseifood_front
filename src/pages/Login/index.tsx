import {useRecoilValue} from 'recoil';
import {LoginView} from './LoginView';
import {Lang} from '@type/index';
import {langState} from '@modules/atoms';
import {LoginString} from '@utils/constants/strings';
import {useState} from 'react';

const Login = () => {
  const lang = useRecoilValue<Lang>(langState);
  const [didLoggedin, setDidLoggedin] = useState<boolean>(false);

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = LoginString({lang: lang, key: 'input.placeholder'});
  };

  const loginOnClick = () => {
    setDidLoggedin(true);
  };

  return (
    <LoginView
      didLoggedin={didLoggedin}
      loginOnClick={loginOnClick}
      handleOnFocus={handleOnFocus}
      handleOnBlur={handleOnBlur}
    />
  );
};

export default Login;
