export type WeeklyData = {
  only_employee: boolean;
  student_menu: Menu;
  employee_menu: Menu;
  additional_menu: Menu;
};

export type Menu = {
  [date: string]: string[];
};

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
