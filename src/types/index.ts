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
  role: UserRole;
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

export const LangEnum = {
  KO: { text: '한국어', code: 'ko' },
  EN: { text: 'English', code: 'en' },
  ZH: { text: '中文', code: 'zh' },
} as const;
type LangEnum = (typeof LangEnum)[keyof typeof LangEnum];

export const MenuEnum = {
  A: { text: 'additionalMenu' },
  S: { text: 'studentMenu' },
  E: { text: 'additionalMenu' },
  N: { text: 'none' },
} as const;
type MenuEnumKey = keyof typeof MenuEnum;
type MenuEnum = (typeof MenuEnum)[MenuEnumKey];

export const MenuListItem = {
  COMMENT: { labelKey: 'listbutton.label.comment', route: 'myComment' },
  LIKE: { labelKey: 'listbutton.label.like', route: 'myLike' },
  HELP: { labelKey: 'listbutton.label.help', route: 'help' },
  ABOUT: { labelKey: 'listbutton.label.aboutme', route: 'aboutme' },
  BACK: { labelKey: 'listbutton.label.backoffice', route: 'back' },
} as const;
type MenuListItem = (typeof MenuListItem)[keyof typeof MenuListItem];

// After modifying the structure of this UserRoleEnum, It's mandatory to clean up user's userInfoState(user info of recoil persist)
export const UserRoleData = {
  A: <UserRoleValueType>{
    text: 'Admin',
    value: 'A',
    accessibleMenuItems: <AccessibleMenuItemGroup>[
      [MenuListItem.COMMENT, MenuListItem.LIKE],
      [MenuListItem.HELP, MenuListItem.ABOUT],
      [MenuListItem.BACK],
    ],
  },
  M: <UserRoleValueType>{
    text: 'Manager',
    value: 'M',
    accessibleMenuItems: <AccessibleMenuItemGroup>[
      [MenuListItem.COMMENT, MenuListItem.LIKE],
      [MenuListItem.HELP, MenuListItem.ABOUT],
      [MenuListItem.BACK],
    ],
  },
  U: <UserRoleValueType>{
    text: 'User',
    value: 'U',
    accessibleMenuItems: <AccessibleMenuItemGroup>[
      [MenuListItem.COMMENT, MenuListItem.LIKE],
      [MenuListItem.HELP, MenuListItem.ABOUT],
    ],
  },
  G: <UserRoleValueType>{
    // default, for only usage in front-end
    text: 'Guest',
    value: 'G',
    accessibleMenuItems: <AccessibleMenuItemGroup>[[MenuListItem.HELP, MenuListItem.ABOUT]],
  },
} as const;
type AccessibleMenuItemGroup = MenuListItem[][];
type UserRoleValueType = { text: string; value: string; accessibleMenuItems: AccessibleMenuItemGroup };
export type UserRoleKey = keyof typeof UserRoleData;
export type UserRole = (typeof UserRoleData)[UserRoleKey];
