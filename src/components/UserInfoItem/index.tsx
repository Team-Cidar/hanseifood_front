import React, { useRef, useState } from 'react';
import UserInfoItemComp from './UserInfoItemComp';
import { UserInfoItemProps } from './types';
import { UserInfo, UserRole, UserRoleKey } from '@type/index';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '@modules/atoms';
import { requestModifyUserRole } from '@apis/index';

const UserInfoItem = ({
  userData,
  roleEditable,
  nicknameEditable,
  emailEditable,
  showKaKaoInfo,
}: UserInfoItemProps) => {
  const adminUser = useRecoilValue<UserInfo>(userInfoState);
  const [user, set_user] = useState<UserInfo>(userData);
  const [nickname, set_nickname] = useState<string>('');
  const [email, set_email] = useState<string>('');
  const nicknameRef = useRef<HTMLInputElement>(null); // remain for future usage
  const emailRef = useRef<HTMLInputElement>(null); // remain for future usage

  const onChangeNickname = (text: string) => {
    set_nickname(text);
  };

  const onChangeEmail = (text: string) => {
    set_email(text);
  };

  const onChangeRole = (value: string) => {
    const roleKey: UserRoleKey = value as UserRoleKey;
    const role: UserRole = UserRole[roleKey];
    if (!confirm(`${user.nickname}의 권한을 [${role.text}]로 변경하시겠습니까?`)) return;
    requestModifyUserRole(user.kakaoId, value)
      .then(() => {
        set_user((prev) => ({
          ...prev,
          role: role,
        }));
      })
      .catch((err) => console.log(err));
  };

  const onBlurNickname = () => {
    if (!nickname) return;
    if (!confirm('')) {
      set_nickname('');
      return;
    }
    // call api
  };

  const onBlurEmail = () => {
    if (!email) return;
    if (!confirm('')) {
      set_email('');
      return;
    }
    // call api
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  return (
    <UserInfoItemComp
      datas={{
        adminUser,
        user,
        nickname,
        email,
        roleEditable,
        nicknameEditable,
        emailEditable,
        showKaKaoInfo,
      }}
      refs={{
        nicknameRef,
        emailRef,
      }}
      callbacks={{
        onChangeNickname,
        onChangeEmail,
        onChangeRole,
        onBlurNickname,
        onBlurEmail,
        onKeyDown,
      }}
    />
  );
};

export default UserInfoItem;
