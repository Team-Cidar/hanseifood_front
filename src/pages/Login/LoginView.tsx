import {useRecoilValue, useSetRecoilState} from 'recoil';

import {Container, Content, InputText, Title} from './Login.styled';
import {langState} from '@modules/atoms';
import {Lang} from '@type/index';
import {LoginString} from '@utils/constants/strings';
import {useState} from 'react';
import {IconButton} from '@components/Button';
import SvgIcon from '@components/SvgIcon';

interface ILoginView {
  didLoggedin: boolean;
  loginOnClick: () => void;
  handleOnFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleOnBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const LoginView = ({
  didLoggedin,
  loginOnClick,
  handleOnFocus,
  handleOnBlur,
}: ILoginView) => {
  const lang = useRecoilValue<Lang>(langState);

  return (
    <Container>
      <Content $display={!didLoggedin}>
        <Title>{LoginString({lang: lang, key: 'title.direction.kakao'})}</Title>
        <IconButton
          label={LoginString({lang: lang, key: 'button.label.kakao'})}
          backgroundColor="#FEE500"
          color="#191919"
          borderWidth="0px"
          width="100%"
          svg={
            <SvgIcon name={'kakao'} width={20} height={20} fill={'#000000'} />
          }
          onClick={loginOnClick}
        />
      </Content>
      <Content $display={didLoggedin}>
        <Title>
          {LoginString({lang: lang, key: 'title.direction.nickname'})}
        </Title>
        <InputText
          placeholder={`${LoginString({
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
