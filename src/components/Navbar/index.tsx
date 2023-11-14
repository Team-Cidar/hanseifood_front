import React from 'react'
import { Container, NavbarBox, NavbarItem, TicketBox } from './Navbar.styled';
import SvgIcon from '@components/SvgIcon';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	const handleNavigate = (name: string) => {
		navigate(`/${name}`);
	};

	return (
		<Container>
			<NavbarBox>
				<NavbarItem onClick={() => handleNavigate('')}>
					<SvgIcon name={'home'} width={78} height={70} fill={''} />
				</NavbarItem>
				<NavbarItem onClick={() => handleNavigate('ticket')}>
					<TicketBox>
						<SvgIcon name={'ticket'} width={34} height={28} fill={''} />
					</TicketBox>
				</NavbarItem>
				<NavbarItem onClick={() => handleNavigate('mypage')}>
					<SvgIcon name={'mypage'} width={78} height={70} fill={'white'} />
				</NavbarItem>
			</NavbarBox>
		</Container>
  )
}

export default Navbar;