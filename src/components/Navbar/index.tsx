import {
  Container,
  NavbarBox,
  NavbarItem,
  TicketBox,
  TicketBoxOn,
} from './Navbar.styled';
import SvgIcon from '@components/SvgIcon';
import {EColor} from '@styles/color';
import { HeaderBar } from '@components/HeaderBar';
import usePageControll from '@hooks/usePageControll';

const Navbar = () => {
  const { navigation, handlePage, handlePrevPage } = usePageControll();

  if (navigation.page === "home" || navigation.page === "ticket" || navigation.page === "mypage") {
    return (
      <Container>
        <NavbarBox>
          <NavbarItem onClick={() => handlePage('home')}>
            {navigation.page === 'home' ? (
              <SvgIcon name={'home_on'} width={78} height={70} fill={''} />
            ) : (
              <SvgIcon name={'home'} width={78} height={70} fill={''} />
            )}
          </NavbarItem>
          <NavbarItem onClick={() => handlePage('ticket')}>
            {navigation.page === 'ticket' ? (
              <TicketBoxOn>
                <SvgIcon
                  name={'ticket_on'}
                  width={34}
                  height={28}
                  fill={EColor.COLOR_INTERACTION}
                />
              </TicketBoxOn>
            ) : (
              <TicketBox>
                <SvgIcon name={'ticket'} width={34} height={28} fill={''} />
              </TicketBox>
            )}
          </NavbarItem>
          <NavbarItem onClick={() => handlePage('mypage')}>
            {navigation.page === 'mypage' ? (
              <SvgIcon name={'mypage_on'} width={78} height={70} fill={'white'} />
            ) : (
              <SvgIcon name={'mypage'} width={78} height={70} fill={'white'} />
            )}
          </NavbarItem>
        </NavbarBox>
      </Container>
    );
  } else {
    return <HeaderBar left={<SvgIcon name={"back"} width={24} height={24} fill={"none"} />} onClickLeft={handlePrevPage} />;
  }

};

export default Navbar;
