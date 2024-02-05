import React from 'react';
import { Container, Content, InputText, Title } from './LoginConfirm.styled';
import { Lang } from '@type/index';
import { LoginConfirmString } from '@utils/constants/strings';
import { IconButton } from '@components/Button';

type LoginPageProps = {
  lang: Lang;
  inputRef: React.RefObject<HTMLInputElement>;
  isNewUser: boolean;
  nickname: string;
  onSuccessClick: () => void;
  handleOnFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleOnBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (nickname: string) => void;
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const LoginConfirmView = ({
  lang,
  inputRef,
  isNewUser,
  nickname,
  onSuccessClick,
  handleOnFocus,
  handleOnBlur,
  handleSubmit,
  handleEnter,
}: LoginPageProps) => {
  return (
    <Container>
      <Content $display={!isNewUser}>
        <Title>{LoginConfirmString({ lang: lang, key: 'title.direction.kakao.done' })}</Title>
        <IconButton
          label={LoginConfirmString({
            lang: lang,
            key: 'button.label.kakao.confirm',
          })}
          backgroundColor="#FEE500"
          tintColor="#FEE500"
          color="#191919"
          borderWidth="0px"
          width="100%"
          onClick={onSuccessClick}
        />
      </Content>
      <Content $display={isNewUser}>
        <Title>{LoginConfirmString({ lang: lang, key: 'title.direction.nickname' })}</Title>
        <InputText
          ref={inputRef}
          placeholder={`${LoginConfirmString({
            lang: lang,
            key: 'input.placeholder',
          })}`}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onKeyUp={handleEnter}
        />
        <IconButton label="확인" onClick={() => handleSubmit(nickname)} />
      </Content>
    </Container>
  );
};
