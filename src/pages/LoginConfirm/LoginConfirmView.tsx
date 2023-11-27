import {useRecoilValue} from 'recoil';
import React from 'react';

import {Container, Content, InputText, Title} from './LoginConfirm.styled';
import {langState} from '@modules/atoms';
import {Lang} from '@type/index';
import {LoginConfirmString} from '@utils/constants/strings';
import {IconButton} from '@components/Button';

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
  const lang = useRecoilValue<Lang>(langState);

  return (
    <Container>
      <Content $display={!isNewUser}>
        <Title>
          {LoginConfirmString({lang: lang, key: 'title.direction.kakao.done'})}
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
          {LoginConfirmString({lang: lang, key: 'title.direction.nickname'})}
        </Title>
        <InputText
          ref={inputRef}
          placeholder={`${LoginConfirmString({
            lang: lang,
            key: 'input.placeholder',
          })}`}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
      </Content>
    </Container>
  );
};
