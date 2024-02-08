import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoginConfirmView } from './LoginConfirmView';
import { Lang, UserInfo, UserKakaoInfo, UserRole, UserRoleKey } from '@type/index';
import { langState, userInfoState } from '@modules/atoms';
import { LoginConfirmString } from '@utils/constants/strings';
import { useEffect, useRef, useState } from 'react';
import { requestConfirmLogin, requestRegisterUser } from '@apis/index';
import usePageControll from '@hooks/usePageControll';

const LoginConfirm = () => {
  const lang = useRecoilValue<Lang>(langState);
  const kakaoCode = new URLSearchParams(location.search).get('code');
  const inputRef = useRef<HTMLInputElement>(null);
  const { handlePage } = usePageControll();

  const set_userInfo = useSetRecoilState(userInfoState);
  const [isNewUser, set_isNewUser] = useState(false);
  const [nickname, set_nickname] = useState<string>('');
  const [kakaoInfo, set_kakaoInfo] = useState<UserKakaoInfo | null>(null);

  useEffect(() => {
    if (!kakaoCode) {
      alert(LoginConfirmString({ lang: lang, key: 'alert.fail.login' }));
      handlePage('login');
    }
  }, []);

  const showUserNicknameInput = () => {
    set_isNewUser(true);
    setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 500);
  };

  const saveUserInfoGoHome = (user: UserInfo, accessToken: string, refreshToken: string) => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    set_userInfo({
      ...user,
    });
    handlePage('home');
  };

  const onSuccessClick = async () => {
    !requestConfirmLogin(kakaoCode)
      .then(async (res) => {
        if (res.data.status) {
          const accessToken = res.data.accessToken;
          const refreshToken = res.data.refreshToken;
          const roleKey: UserRoleKey = res.data.user.role;
          saveUserInfoGoHome(
            { ...res.data.user, role: UserRole[roleKey] as UserRole } as UserInfo,
            accessToken,
            refreshToken,
          );
          return;
        }
        set_kakaoInfo({
          kakaoId: res.data.user.kakaoId,
          kakaoName: res.data.user.kakaoName,
          email: res.data.user.email,
        });
        showUserNicknameInput();
      })
      .catch(() => {
        alert(LoginConfirmString({ lang: lang, key: 'alert.fail.login' }));
        handlePage('login');
      });
  };

  const handleSubmit = async (nickname: string) => {
    if (!confirm(LoginConfirmString({ lang: lang, key: 'alert.check.nickname' }))) {
      inputRef.current!.value = '';
      return;
    }
    requestRegisterUser(kakaoInfo, nickname)
      .then((res) => {
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        const roleKey: UserRoleKey = res.data.user.role;
        saveUserInfoGoHome(
          { ...res.data.user, role: UserRole[roleKey] as UserRole } as UserInfo,
          accessToken,
          refreshToken,
        );
      })
      .catch((err) => {
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

  const handleEnter = () => {
    set_nickname(inputRef.current!.value);
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
