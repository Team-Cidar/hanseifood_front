import { Container, NavbarBox, NavbarItem, TicketBox, TicketBoxOn } from './Navbar.styled';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import { HeaderBar } from '@components/HeaderBar';
import usePageControll from '@hooks/usePageControll';

const Navbar = () => {
  const { navigation, handlePage, handlePrevPage } = usePageControll();

  if (navigation.page === 'home' || navigation.page === 'notice' || navigation.page === 'mypage') {
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
          <NavbarItem onClick={() => handlePage('notice')}>
            {navigation.page === 'notice' ? (
              <TicketBoxOn>
                <SvgIcon
                  name={'announcement'}
                  width={30}
                  height={28}
                  fill={'white'}
                  stroke={EColor.COLOR_INTERACTION}
                />
              </TicketBoxOn>
            ) : (
              <TicketBox>
                <SvgIcon name={'announcement'} width={30} height={28} fill={'white'} stroke={EColor.TEXT_800} />
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
    return (
      <HeaderBar left={<SvgIcon name={'back'} width={24} height={24} fill={'none'} />} onClickLeft={handlePrevPage} />
    );
  }
};

export default Navbar;
