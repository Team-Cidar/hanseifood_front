import { Lang } from '@type/index';
import Login from './Login';
import Home from './Home';
import MyPage from './MyPage';
import TicketPage from './TicketPage';
import LoginConfirm from './LoginConfirm';
import MyLike from './MyLike';
import MyComment from './MyComment';
import Comment from './Comment';

interface IStringConst {
  lang: Lang;
  key: string;
}

export const LoginString = ({ lang, key }: IStringConst) => {
  return Login[key][lang.langType.code];
};

export const LoginConfirmString = ({ lang, key }: IStringConst) => {
  return LoginConfirm[key][lang.langType.code];
};

export const HomeString = ({ lang, key }: IStringConst) => {
  return Home[key][lang.langType.code];
};

export const MyPageString = ({ lang, key }: IStringConst) => {
  return MyPage[key][lang.langType.code];
};

export const TicketPageString = ({ lang, key }: IStringConst) => {
  return TicketPage[key][lang.langType.code];
};

export const MyLikeString = ({ lang, key }: IStringConst) => {
  return MyLike[key][lang.langType.code];
};

export const MyCommentString = ({ lang, key }: IStringConst) => {
  return MyComment[key][lang.langType.code];
};

export const CommentPageString = ({ lang, key }: IStringConst) => {
  return Comment[key][lang.langType.code];
};
