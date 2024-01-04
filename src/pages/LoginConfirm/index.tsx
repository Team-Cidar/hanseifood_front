import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoginConfirmView } from './LoginConfirmView';
import { Lang, UserInfo, UserKakaoInfo } from '@type/index';
import { langState, userInfoState } from '@modules/atoms';
import { LoginConfirmString } from '@utils/constants/strings';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestConfirmLogin, requestRegisterUser } from '@apis/index';

const LoginConfirm = () => {
  const lang = useRecoilValue<Lang>(langState);
  const kakaoCode = new URLSearchParams(location.search).get('code');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const set_userInfo = useSetRecoilState(userInfoState);
  const [isNewUser, set_isNewUser] = useState(false);
  const [nickname, set_nickname] = useState<string>('');
  const [kakaoInfo, set_kakaoInfo] = useState<UserKakaoInfo | null>(null);

  useEffect(() => {
    if (!kakaoCode) {
      alert(LoginConfirmString({ lang: lang, key: 'alert.fail.login' }));
      navigate('/login');
    }
  }, []);

  const showUserNicknameInput = () => {
    set_isNewUser(true);
    setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 500);
  };

  const saveUserInfoGoHome = (user: UserInfo) => {
    set_userInfo({
      ...user,
    });
    navigate('/home');
  };

  const onSuccessClick = async () => {
    requestConfirmLogin(kakaoCode)
    .then(async res => {
      if (res.data.status) {
        await localStorage.setItem('access_token', res.data.access_token);
        await localStorage.setItem('refresh_token', res.data.refresh_token);
        saveUserInfoGoHome(res.data.user);
        return;
      }
      set_kakaoInfo({
        "kakao_id": res.data.user.kakao_id,
        "kakao_name": res.data.user.kakao_name,
        "email": res.data.user.email,
      });
    }).catch(err => {
      console.log(err);
    });
    showUserNicknameInput();
  };

  const handleSubmit = async (nickname: string) => {
    if (!confirm(LoginConfirmString({ lang: lang, key: 'alert.check.nickname' }))) {
      inputRef.current!.value = '';
      return;
    }
    requestRegisterUser(kakaoInfo, nickname)
    .then(res => {
      saveUserInfoGoHome(res.data.user);
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = LoginConfirmString({
      lang: lang,
      key: 'input.placeholder',
    });
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    set_nickname(e.target.value);
  };

  return (
    <LoginConfirmView
      lang={lang}
      inputRef={inputRef}
      isNewUser={isNewUser}
      nickname={nickname}
      onSuccessClick={onSuccessClick}
      handleOnFocus={handleOnFocus}
      handleOnBlur={handleOnBlur}
      handleSubmit={handleSubmit}
      handleEnter={handleEnter}
    />
  );
};

export default LoginConfirm;
