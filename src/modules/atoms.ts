import {User, WeeklyData, Lang, LangEnum} from '@type/index';
import {atom} from 'recoil';

export const weeklyDataState = atom<WeeklyData>({
  key: 'weeklyDataState',
  default: {
    only_employee: false,
    student_menu: {},
    employee_menu: {},
  },
});

export const userState = atom<User>({
  key: 'userState',
  default: {
    isEmployee: false,
    page: 'home',
  },
});

export const langState = atom<Lang>({
  key: 'langState',
  default: {
    langType: LangEnum.KO,
  },
});
