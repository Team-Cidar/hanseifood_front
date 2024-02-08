import { UserInfo } from '@type/index';
import { RefObject } from 'react';

export type BackOfficeUserViewProps = {
  datas: Datas;
  refs: Refs;
  callbacks: Callbacks;
};
type Datas = {
  users: UserInfo[];
};
type Refs = {
  scrollRef: RefObject<HTMLDivElement>;
};
type Callbacks = {
  onSomething: () => void;
};
