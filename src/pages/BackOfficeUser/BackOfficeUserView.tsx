import UserInfoItem from '@components/UserInfoItem';
import { Body, Container } from './styles';
import { BackOfficeUserViewProps } from './types';

const BackOfficeUserView = ({ datas, refs }: BackOfficeUserViewProps) => {
  return (
    <Container>
      <Body ref={refs.scrollRef}>
        {datas.users.map((user) => (
          <UserInfoItem key={user.kakaoId} userData={user} roleEditable nicknameEditable emailEditable showKaKaoInfo />
        ))}
      </Body>
    </Container>
  );
};

export default BackOfficeUserView;
