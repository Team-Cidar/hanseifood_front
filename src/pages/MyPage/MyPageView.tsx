import { Container } from './styles';
import { useRecoilState, useRecoilValue } from 'recoil';

import { langState, userInfoState } from '@modules/atoms';
import { MyPageString } from '@utils/constants/strings';
import PageLogo from '@components/PageLogo';
import { Divider } from '@components/Divider';
import { ListButton } from '@components/ListButton';
import { MenuListItem, UserInfo, UserRole } from '@type/index';
import { DefaultUserInfo } from '@type/defaults';
import { MENU_LIST_BY_ROLE, MenuListByRoleKey } from '@utils/constants/enum_values/role_menu_lists';
import usePageControll from '@hooks/usePageControll';

const MyPageView = () => {
  const lang = useRecoilValue(langState);
  const [userInfo, set_userInfo] = useRecoilState<UserInfo>(userInfoState);
  const { handlePage } = usePageControll();

  return (
    <Container>
      <PageLogo title={MyPageString({ lang: lang, key: 'title' })} subtitle={``} />
      {userInfo.role.value == UserRole.G.value ? (
        <ListButton
          label={MyPageString({ lang: lang, key: 'listbutton.label.login' })}
          onClick={() => handlePage('login')}
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
      {MENU_LIST_BY_ROLE[userInfo.role.value as MenuListByRoleKey].map((menuGroup: MenuListItem[], idx: number) => {
        // menu group (to separate each group using Divider)
        return (
          <div key={idx}>
            {menuGroup.map((menu, idx) => {
              // menu item
              return (
                <ListButton
                  key={idx}
                  label={MyPageString({ lang: lang, key: menu.labelKey })}
                  onClick={() => handlePage(menu.route)}
                />
              );
            })}
            <Divider />
          </div>
        );
      })}
    </Container>
  );
};

export default MyPageView;
