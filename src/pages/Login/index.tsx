import {useRecoilValue} from 'recoil';
import {LoginView} from './LoginView';
import {Lang} from '@type/index';
import {langState} from '@modules/atoms';
import {LoginString} from '@utils/constants/strings';
import {useRef, useState} from 'react';

const Login = () => {
  const lang = useRecoilValue<Lang>(langState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [didLoggedin, setDidLoggedin] = useState<boolean>(false);

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = LoginString({lang: lang, key: 'input.placeholder'});
  };

  const loginOnClick = () => {
    setDidLoggedin(true);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 500);
  };

  return (
    <LoginView
      inputRef={inputRef}
      didLoggedin={didLoggedin}
      loginOnClick={loginOnClick}
      handleOnFocus={handleOnFocus}
      handleOnBlur={handleOnBlur}
    />
  );
};

export default Login;
