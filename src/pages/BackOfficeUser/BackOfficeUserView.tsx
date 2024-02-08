import UserInfoItem from '@components/UserInfoItem';
import { Body, Container } from './styles';
import { BackOfficeUserViewProps } from './types';
import PageLogo from '@components/PageLogo';

const BackOfficeUserView = ({ datas, refs }: BackOfficeUserViewProps) => {
  return (
    <Container>
      <PageLogo title={'유저 관리'} subtitle={''} />
      <Body ref={refs.scrollRef}>
        {datas.users.map((user) => (
          // use this ui after implementing update nickname and email api.
          // <UserInfoItem key={user.kakaoId} userData={user} roleEditable nicknameEditable emailEditable showKaKaoInfo />
          <UserInfoItem key={user.kakaoId} userData={user} roleEditable showKaKaoInfo />
        ))}
      </Body>
    </Container>
  );
};

export default BackOfficeUserView;
