import { UserInfo } from '@type/index';
import { RefObject } from 'react';

export interface UserInfoItemProps {
  userData: UserInfo;
  roleEditable?: boolean;
  nicknameEditable?: boolean;
  emailEditable?: boolean;
  showKaKaoInfo?: boolean;
}

export interface UserInfoItemCompProps {
  datas: Datas;
  refs: Refs;
  callbacks: Callbacks;
}
type Datas = {
  adminUser: UserInfo;
  user: UserInfo;
  nickname: string;
  email: string;
  roleEditable?: boolean;
  nicknameEditable?: boolean;
  emailEditable?: boolean;
  showKaKaoInfo?: boolean;
};
type Refs = {
  nicknameRef: RefObject<HTMLInputElement>;
  emailRef: RefObject<HTMLInputElement>;
};
type Callbacks = {
  onChangeNickname: (text: string) => void;
  onChangeEmail: (text: string) => void;
  onChangeRole: (value: string) => void;
  onBlurNickname: () => void;
  onBlurEmail: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
