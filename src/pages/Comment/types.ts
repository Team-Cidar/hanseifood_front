import { Comment, Lang, MenuSpecific, UserInfo } from '@type/index';
import { RefObject } from 'react';

export type CommentViewProps = {
  datas: Datas;
  refs: Refs;
  callbacks: Callbacks;
};
export type Datas = {
  lang: Lang;
  menu: MenuSpecific;
  comments: Comment[];
  user: UserInfo;
  commentText: string;
  liked: boolean;
};
export type Refs = {
  scrollRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLTextAreaElement>;
};
export type Callbacks = {
  onScroll: () => void;
  onDelete: (commentId: string) => void;
  onSubmit: () => void;
  onTextChanged: (text: string) => void;
  onToggleLike: () => void;
  onInputFocus: () => void;
  onInputBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

export interface ContainerProps {
  height: number;
}
