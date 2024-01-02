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
  onSubmit: (nickname: string) => void;
}

export const LoginConfirmView = ({
  inputRef,
  isNewUser,
  onSuccessClick,
  handleOnFocus,
  handleOnBlur,
  onSubmit,
}: ILoginPageProps) => {

  const [nickname, set_nickname] = useState<string>('');
  const navigate = useNavigate();
  const lang = useRecoilValue<Lang>(langState);

  const onEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    set_nickname(e.target.value);
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
        <IconButton label="확인" onClick={() => onSubmit(nickname)} />
      </Content>
    </Container>
  );
};
