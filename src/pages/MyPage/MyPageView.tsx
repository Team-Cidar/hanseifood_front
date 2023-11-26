import React from 'react'
import { Container, Logo } from './styles';
import PageLogo from '@components/PageLogo';
import { Divider } from '@components/Divider';
import { ListButton } from '@components/ListButton';

const MyPageView = () => {
  return (
	  <Container>
		  <PageLogo title={"내 정보"} subtitle={""} />
      <ListButton label={'로그인'} />
      <Divider />
      <div>
        <ListButton label={"구매 내역"} />
      </div>
		  <Divider />
      <div>
        <ListButton label={'도움말'} />
        <ListButton label={'About me'} />
      </div>
    </Container>
  );
}

export default MyPageView;
