import React from 'react'
import { Container, NavbarBox, NavbarItem, TicketBox, TicketBoxOn } from './Navbar.styled';
import SvgIcon from '@components/SvgIcon';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { User } from '@type/index';
import { userState } from '@modules/atoms';
import { EColor } from '@styles/color';

const Navbar = () => {
	const navigate = useNavigate();

	const [{ page }, set_page] = useRecoilState<User>(userState);

	console.log(page);

	const handleNavigate = (name: string) => {
		set_page({ page: name });
		navigate(`/${name}`);
	};

	return (
		<Container>
			<NavbarBox>
				<NavbarItem onClick={() => handleNavigate('home')}>
					{
						page === 'home' ?
						<SvgIcon name={'home_on'} width={78} height={70} fill={''} /> :
						<SvgIcon name={'home'} width={78} height={70} fill={''} />
					}
				</NavbarItem>
				<NavbarItem onClick={() => handleNavigate('ticket')}>
					{
						page === 'ticket' ?
						<TicketBoxOn><SvgIcon name={'ticket_on'} width={34} height={28} fill={EColor.COLOR_INTERACTION} /></TicketBoxOn> :
						<TicketBox><SvgIcon name={'ticket'} width={34} height={28} fill={''} /></TicketBox>
					}
				</NavbarItem>
				<NavbarItem onClick={() => handleNavigate('mypage')}>
					{
						page === 'mypage' ?
						<SvgIcon name={'mypage_on'} width={78} height={70} fill={'white'} /> :
						<SvgIcon name={'mypage'} width={78} height={70} fill={'white'} />
					}
				</NavbarItem>
			</NavbarBox>
		</Container>
  )
}

export default Navbar;