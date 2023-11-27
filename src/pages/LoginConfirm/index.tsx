import {useRecoilValue} from 'recoil';
import {LoginConfirmView} from './LoginConfirmView';
import {Lang} from '@type/index';
import {langState} from '@modules/atoms';
import {LoginConfirmString} from '@utils/constants/strings';
import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
      alert(LoginConfirmString({lang: lang, key: 'alert.fail.login'}));
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

  const onSuccessClick = () => {
    // query에서 code뺀 userCode를 담아서 server한테 api 요청
    //// 서버에서 이미 있는 유저인지 확인 후
    //// 있으면 status: true, user정보 등 보내기
    //// 없으면 status: false 보내기
    // 여기서 우리 서버 api 호출 후 status가 true면 /home 으로 navigate
    // status가 false면 showUserNicknameInput() 실행
    // 서버에서 카카오 서버로 api요청 해서 token 받을 때 body 데이터의 redirectUrl은 인가코드 받을 때 보낸거랑 동일한 주소 사용해야한대요
    showUserNicknameInput();
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
