import { Menu } from "@type/index";
import { atom } from "recoil";

export const menuState = atom<Menu[]>({
  key: 'menuState',
  default: []
});
