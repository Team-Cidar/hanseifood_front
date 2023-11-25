import {Lang} from '@type/index';
import {Login, Home, MyPage, TicketPage} from './strings';

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
