import { UserRole } from '@type/index';
import { Container, Content, ContentInput, Label, Row, Title, TitleInput } from './styles';
import { UserInfoItemCompProps } from './types';
import { Divider } from '@components/Divider';

const UserInfoItemComp = ({ datas, refs, callbacks }: UserInfoItemCompProps) => (
  <Container>
    {datas.nicknameEditable ? (
      <TitleInput
        ref={refs.nicknameRef}
        value={datas.nickname}
        size={10}
        maxLength={10}
        placeholder={datas.user.nickname}
        onChange={(e) => callbacks.onChangeNickname(e.target.value)}
        onBlur={callbacks.onBlurNickname}
        onKeyDown={callbacks.onKeyDown}
      />
    ) : (
      <Title>{datas.user.nickname}</Title>
    )}
    <Divider />
    {datas.showKaKaoInfo && (
      <>
        <Row>
          <Label>Kakao Id</Label>
          <Content>{datas.user.kakaoId}</Content>
        </Row>
        <Row>
          <Label>Kakao Name</Label>
          <Content>{datas.user.kakaoName}</Content>
        </Row>
      </>
    )}
    <Row>
      <Label>Email</Label>
      {datas.emailEditable ? (
        <ContentInput
          ref={refs.emailRef}
          value={datas.email}
          placeholder={datas.user.email || 'empty'}
          onChange={(e) => callbacks.onChangeEmail(e.target.value)}
          onBlur={callbacks.onBlurEmail}
          onKeyDown={callbacks.onKeyDown}
        />
      ) : (
        <Content>{`${datas.user.email || 'empty'}`}</Content>
      )}
    </Row>
    <Row>
      <Label>Role</Label>
      {datas.roleEditable && datas.adminUser.role.priority <= datas.user.role.priority ? (
        <select value={datas.user.role.value} onChange={(e) => callbacks.onChangeRole(e.target.value)}>
          {Object.entries(UserRole)
            .filter((item) => item[0] != 'G')
            .map(([key, value]) => (
              <option key={key} value={key} disabled={datas.adminUser.role.priority > value.priority}>
                {value.text}
              </option>
            ))}
        </select>
      ) : (
        <Content>{datas.user.role.text}</Content>
      )}
    </Row>
  </Container>
);

export default UserInfoItemComp;
