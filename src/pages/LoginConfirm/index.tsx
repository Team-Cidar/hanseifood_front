import { useRecoilValue } from 'recoil';
import { LoginConfirmView } from './LoginConfirmView';
import { Lang } from '@type/index';
import { langState } from '@modules/atoms';
import { LoginConfirmString } from '@utils/constants/strings';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginConfirm = () => {
  const lang = useRecoilValue<Lang>(langState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isNewUser, set_isNewUser] = useState(false);
  const [userCode, set_userCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const kakaoCode = new URLSearchParams(location.search).get('code');
    if (kakaoCode) set_userCode(() => kakaoCode);
    else {
      alert(LoginConfirmString({ lang: lang, key: 'alert.fail.login' }));
      navigate('/login');
    }
  }, []);

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = LoginConfirmString({
      lang: lang,
      key: 'input.placeholder',
    });
  };

  const onSuccessClick = async () => {
    console.log("hi")
    const kakaoCode = new URLSearchParams(location.search).get('code');
    console.log(kakaoCode);
    const response = await axios.post('http://localhost:8000/login', { 'code': kakaoCode });
    if (response.data.isExists == "true") {
      console.log(response);
      const token = response.data.access_token;
      const kakaonickname = response.data.kakaonickname;
      const id = response.data.id;
      const userData = {
        kakaonickname: kakaonickname,
        id: id,
      };
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate("/home");
    }

    else {
      const token = response.data.access_token;
      const kakaonickname = response.data.kakaonickname;
      const id = response.data.id;
      const userData = {
        kakaonickname: kakaonickname,
        id: id,
      };
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      showUserNicknameInput();
    }

  };

  const showUserNicknameInput = () => {
    set_isNewUser(true);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 500);
  };

  return (
    <LoginConfirmView
      inputRef={inputRef}
      isNewUser={isNewUser}
      onSuccessClick={onSuccessClick}
      handleOnFocus={handleOnFocus}
      handleOnBlur={handleOnBlur}
    />
  );
};

export default LoginConfirm;
