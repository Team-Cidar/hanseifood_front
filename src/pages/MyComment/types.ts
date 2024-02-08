import { Lang, Comment, UserInfo, MenuSpecific } from '@type/index';
import { RefObject } from 'react';

export type MyCommentViewProps = {
  datas: Datas;
  refs: Refs;
  callbacks: Callbacks;
};

export type Datas = {
  lang: Lang;
  comments: Comment[];
  user: UserInfo;
};

export type Refs = {
  scrollRef: RefObject<HTMLDivElement>;
};

export type Callbacks = {
  onDelete: (commentId: string) => void;
  onClickMenu: (menu: MenuSpecific) => void;
};
