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
};

export type Menu = {
  menu: string[];
  menuId: string;
  menuType: string;
  likeCount: number;
  commentCount: number;
};

export type MenuSpecific = {
  date: string;
  menus: string[];
  menuId: string;
  menuType: string;
  likeCount: number;
  commentCount: number;
  deleted: boolean;
  deletedAt: string | null;
};

export const MenuEnum = {
  A: { text: 'additionalMenu' },
  S: { text: 'studentMenu' },
  E: { text: 'additionalMenu' },
  N: { text: 'none' },
} as const;
type MenuEnum = (typeof MenuEnum)[keyof typeof MenuEnum];

export type User = {
  isEmployee: boolean;
  isFeedbackModal: boolean;
  page: string;
  prevPage: string;
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

export type StringSetter = (newLabel: string | ((prevLabel: string) => string)) => void;
export type BooleanSetter = (newValue: boolean | ((prevValue: boolean) => boolean)) => void;

export const LangEnum = {
  KO: { text: '한국어', code: 'ko' },
  EN: { text: 'English', code: 'en' },
  ZH: { text: '中文', code: 'zh' },
} as const;
type LangEnum = (typeof LangEnum)[keyof typeof LangEnum];

export type UserKakaoInfo = {
  kakaoId: string;
  email: string;
  kakaoName: string;
};

export type UserInfo = {
  kakaoId: string;
  email: string;
  kakaoName: string;
  isAdmin: boolean;
  nickname: string;
  role: string;
};

export type Paging = {
  currentPage: number;
  pageSize: number;
  hasNext: boolean;
};

export type Commenter = {
  kakaoId: string;
  nickname: string;
};

export type Comment = {
  commentId: string;
  menu: MenuSpecific;
  commenter: Commenter;
  comment: string;
  commentedAt: string;
  deleted: boolean;
  deletedAt: string | null;
};
