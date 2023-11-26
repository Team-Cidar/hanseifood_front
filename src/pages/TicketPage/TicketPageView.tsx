import React from 'react'
import { Container, Logo } from './styles';
import PageLogo from '@components/PageLogo';

const TicketPageView = () => {
	return (
		<Container>
			<PageLogo title={"식권 구매하기"} subtitle={"한눈에, 간편하게! 식권 구매 서비스"} />
		</Container>
  )
}

export default TicketPageView;
