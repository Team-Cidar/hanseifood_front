import { Container } from './styles';
import { useRecoilState, useRecoilValue } from 'recoil';

import { langState, userInfoState, userState } from '@modules/atoms';
import { MyPageString } from '@utils/constants/strings';
import PageLogo from '@components/PageLogo';
import { Divider } from '@components/Divider';
import { ListButton } from '@components/ListButton';
import { User, UserInfo, UserRoleData } from '@type/index';
import { useNavigate } from 'react-router-dom';
import ROUTES_FROM_KEY from '@utils/constants/enum_strings/route_strings';
import { DefaultUserInfo } from '@type/defaults';

const MyPageView = () => {
  const navigate = useNavigate();
  const lang = useRecoilValue(langState);
  const [userInfo, set_userInfo] = useRecoilState<UserInfo>(userInfoState);
  const [{ page }, set_page] = useRecoilState<User>(userState);

  const handleNavigate = (name: string) => {
    set_page((data) => ({ ...data, page: name }));
    navigate(`/${name}`);
    console.log(page); // temp
  };

  return (
    <Container>
      {/* <Button as={Link} to="/back-office">
        BackOffice로 이동
      </Button> */}
      <PageLogo title={MyPageString({ lang: lang, key: 'title' })} subtitle={``} />
      {userInfo.role.value == UserRoleData.G.value ? (
        <ListButton
          label={MyPageString({ lang: lang, key: 'listbutton.label.login' })}
          onClick={() => handleNavigate('login')}
        />
      ) : (
        <ListButton
          label={MyPageString({ lang: lang, key: 'listbutton.label.logout' })}
          onClick={() => {
            if (!confirm(MyPageString({ lang: lang, key: 'confirm.logout' }))) return;
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            set_userInfo(DefaultUserInfo);
          }}
        />
      )}
      <Divider />
      {userInfo.role.accessibleMenuItems.map((menuGroup, idx) => {
        // menu group (to separate each group using Divider)
        return (
          <div key={idx}>
            {menuGroup.map((menu, idx) => {
              // menu item
              return (
                <ListButton
                  key={idx}
                  label={MyPageString({ lang: lang, key: menu.labelKey })}
                  onClick={() => handleNavigate(ROUTES_FROM_KEY[menu.route])}
                />
              );
            })}
            <Divider />
          </div>
        );
      })}
      {/* <div>
        <ListButton
          label={MyPageString({ lang: lang, key: 'listbutton.label.comment' })}
          onClick={() => handleNavigate('mypage/comment')}
        />
        <ListButton
          label={MyPageString({ lang: lang, key: 'listbutton.label.like' })}
          onClick={() => handleNavigate('mypage/like')}
        />
      </div>
      <Divider />
      <div>
        <ListButton label={MyPageString({ lang: lang, key: 'listbutton.label.tickets' })} />
      </div>
      <Divider />
      <div>
        <ListButton
          label={MyPageString({ lang: lang, key: 'listbutton.label.help' })}
          onClick={() => handleNavigate('help')}
        />
        <ListButton
          label={MyPageString({ lang: lang, key: 'listbutton.label.aboutme' })}
          onClick={() => handleNavigate('about-me')}
        />
      </div> */}
    </Container>
  );
};

export default MyPageView;
