import { DefaultNavInfo, DefaultUserInfo } from '@type/defaults';
import { User, WeeklyData, Lang, LangEnum, UserInfo, NavInfo } from '@type/index';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const weeklyDataState = atom<WeeklyData>({
  key: 'weeklyDataState',
  default: {
    keys: [],
    studentMenu: {
      exists: false,
      menus: {},
    },
    employeeMenu: {
      exists: false,
      menus: {},
    },
    additionalMenu: {
      exists: false,
      menus: {},
    },
  },
});

export const userState = atom<User>({
  key: 'userState',
  default: {
    isEmployee: false,
    isFeedbackModal: false,
  },
});

export const naviState = atom<NavInfo>({
  key: 'naviState',
  default: DefaultNavInfo,
  effects_UNSTABLE: [persistAtom],
});

export const langState = atom<Lang>({
  key: 'langState',
  default: {
    langType: LangEnum.KO,
  },
  effects_UNSTABLE: [persistAtom],
});

export const userInfoState = atom<UserInfo>({
  key: 'userInfoState',
  default: DefaultUserInfo,
  effects_UNSTABLE: [persistAtom],
});
