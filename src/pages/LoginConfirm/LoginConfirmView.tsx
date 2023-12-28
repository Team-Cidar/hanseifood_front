import { useRecoilValue } from 'recoil';
import React, { useState } from 'react';

import { Container, Content, InputText, Title } from './LoginConfirm.styled';
import { langState } from '@modules/atoms';
import { Lang } from '@type/index';
import { LoginConfirmString } from '@utils/constants/strings';
import { IconButton } from '@components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ILoginPageProps {
  inputRef: React.RefObject<HTMLInputElement>;
  isNewUser: boolean;
  onSuccessClick: () => void;
  handleOnFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleOnBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const LoginConfirmView = ({
  inputRef,
  isNewUser,
  onSuccessClick,
  handleOnFocus,
  handleOnBlur,
}: ILoginPageProps) => {

  const [Mynickname, setMynickname] = useState<string>('');
  const navigate = useNavigate();
  const lang = useRecoilValue<Lang>(langState);

  const onEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {

    setMynickname(e.target.value);
    console.log(Mynickname);
  };

  const data = { "nickname": Mynickname };

  const SetNickName = async () => {
    if (confirm("정말 이 닉네임으로 설정하시겠습니까?") == true) {
      const response = await axios.post("http://localhost:8000/nickname", data);
      const token = response.data.access_token;
      localStorage.setItem('accessToken', token);
      console.log(response);
      navigate("/home");
    } else { /* empty */ }
  };

  return (
    <Container>
      <Content $display={!isNewUser}>
        <Title>
          {LoginConfirmString({ lang: lang, key: 'title.direction.kakao.done' })}
        </Title>
        <IconButton
          label={LoginConfirmString({
            lang: lang,
            key: 'button.label.kakao.confirm',
          })}
          backgroundColor="#FEE500"
          color="#191919"
          borderWidth="0px"
          width="100%"
          onClick={onSuccessClick}
        />
      </Content>
      <Content $display={isNewUser}>
        <Title>
          {LoginConfirmString({ lang: lang, key: 'title.direction.nickname' })}
        </Title>
        <InputText
          ref={inputRef}
          placeholder={`${LoginConfirmString({
            lang: lang,
            key: 'input.placeholder',
          })}`}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onKeyUp={onEnterPressed}
        />
        <IconButton label="확인" onClick={SetNickName} />
      </Content>
    </Container>
  );
};
