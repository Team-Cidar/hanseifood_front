import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoginConfirmView } from './LoginConfirmView';
import { Lang, UserInfo, UserKakaoinfo } from '@type/index';
import { langState, userInfoState } from '@modules/atoms';
import { LoginConfirmString } from '@utils/constants/strings';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginConfirm = () => {
  const lang = useRecoilValue<Lang>(langState);
  const set_userInfo = useSetRecoilState(userInfoState);
  const userInfo = useRecoilValue<UserInfo>(userInfoState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isNewUser, set_isNewUser] = useState(false);
  const [userCode, set_userCode] = useState('');
  const [kakaoInfo, set_kakaoInfo] = useState<UserKaKaoInfo>(null);
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
    const kakaoCode = new URLSearchParams(location.search).get('code');

    const response = await axios.post('http://localhost:8000/login', { 'code': kakaoCode });
    
    if (response.data.status) {
      saveUserInfoGoHome(response.data);
      return
    }
    // save user to state
    const userData = response.data.user;
    set_kakaoInfo({
      "kakao_id": userData.kakao_id,
      "kakao_name": userData.kakao_name,
      "email": userData.email,
    });
    showUserNicknameInput();
  };

  const showUserNicknameInput = () => {
    set_isNewUser(true);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 500);
  };

  const createUser = async (nickname: string) => {
    if (!confirm("정말 이 닉네임으로 설정하시겠습니까?")) {
      inputRef.current.value = '';
      return
    }
    const data = {
      ...kakaoInfo,
      'nickname': nickname,
    }
    
    const response = await axios.post("http://localhost:8000/nickname", data);
    // if success?
    saveUserInfoGoHome(response.data);
  };

  const saveUserInfoGoHome = (data) => {
    const refresh_token = data.refresh_token;
    const access_token = data.access_token;
    const userData = data.user;
    set_userInfo({
      ...userData,
      refresh_token,
      access_token
    });
    navigate('/home')
  }

  return (
    <LoginConfirmView
      inputRef={inputRef}
      isNewUser={isNewUser}
      onSuccessClick={onSuccessClick}
      handleOnFocus={handleOnFocus}
      handleOnBlur={handleOnBlur}
      onSubmit={createUser}
    />
  );
};

export default LoginConfirm;
