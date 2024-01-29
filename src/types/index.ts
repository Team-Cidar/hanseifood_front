export type WeeklyData = {
  keys: string[];
  studentMenu: MenuSet;
  employeeMenu: MenuSet;
  additionalMenu: MenuSet;
};

export type MenuSet = {
  exists: boolean;
  menus: Menus;
};

export type Menus = {
  [key: string]: Menu;
}

export type Menu = {
  menu: string[];
  menuId: string;
  menuType: string;
  likeCount: number;
  commentCount: number;
}

export const MenuEnum = {
  A: {text: 'additionalMenu'},
  S: {text: 'studentMenu'},
  E: {text: 'additionalMenu'},
  N: {text: 'none'}
} as const;
type MenuEnum = (typeof MenuEnum)[keyof typeof MenuEnum];

export type User = {
  isEmployee: boolean;
  page: string;
};

export type Lang = {
  langType: LangEnum;
};

export type StringConstant = {
  [key: string]: ConstText;
};

export type ConstText = {
  ko: string;
  en: string;
  zh: string;
};

export type StringSetter = (
  newLabel: string | ((prevLabel: string) => string),
) => void;
export type BooleanSetter = (
  newValue: boolean | ((prevValue: boolean) => boolean),
) => void;

export const LangEnum = {
  KO: {text: '한국어', code: 'ko'},
  EN: {text: 'English', code: 'en'},
  ZH: {text: '中文', code: 'zh'},
} as const;
type LangEnum = (typeof LangEnum)[keyof typeof LangEnum];

export type UserKakaoInfo = {
  kakao_id: string,
  email: string,
  kakao_name: string,
}

export type UserInfo = {
  kakao_id: string,
  email: string,
  kakao_name: string,
  is_admin: boolean,
  nickname: string,
  role: string,
}