import Login from './Login';
import Home from './Home';
import MyPage from './MyPage';
import TicketPage from './TicktPage';
import {Lang} from '@type/index';

interface IStringConst {
  lang: Lang;
  key: string;
}

export const LoginString = ({lang, key}: IStringConst) => {
  return Login[key][lang.langType.code];
};

export const HomeString = ({lang, key}: IStringConst) => {
  return Home[key][lang.langType.code];
};

export const MyPageString = ({lang, key}: IStringConst) => {
  return MyPage[key][lang.langType.code];
};

export const TicketPageString = ({lang, key}: IStringConst) => {
  return TicketPage[key][lang.langType.code];
};
