import { User, WeeklyData, Lang, LangEnum, UserInfo } from '@type/index';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist();

export const weeklyDataState = atom<WeeklyData>({
  key: 'weeklyDataState',
  default: {
    keys: [],
    studentMenu: {
      exists: false,
      menus: {}
    },
    employeeMenu: {
      exists: false,
      menus: {}
    },
    additionalMenu: {
      exists: false,
      menus: {}
    },
  },
});

export const userState = atom<User>({
  key: 'userState',
  default: {
    isEmployee: false,
    isFeedbackModal: false,
    page: 'home',
    prevPage: '',
  },
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
  default: {
    kakao_id: '',
    email: '',
    kakao_name: '',
    is_admin: false,
    nickname: '',
    role: '',
  },
  effects_UNSTABLE: [persistAtom]
});
