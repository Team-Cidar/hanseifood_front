import { UserKakaoInfo } from '@type/index';
import request from './request';

export const requestDayFood = () => {
  return request.get('/menus/day');
};

export const requestWeekFood = () => {
  return request.get('/menus/week');
};

export const requestDayTargetFood = (dateTime: string) => {
  return request.get(`/menus/target?date=${dateTime.replace(/-/g, '')}`);
};

export const requestUploadMenu = (datetime, only_employee, has_additional, student, employee, additional) => {
  return request.post('/back/menu', {
    datetime,
    only_employee,
    has_additional,
    student,
    employee,
    additional,
  });
};

export const requestConfirmLogin = (kakaoCode: string | null) => {
  return request.post('/login', {
    'code': kakaoCode
  });
};

export const requestRegisterUser = (kakaoInfo: UserKakaoInfo | null, nickname: string) => {
  return request.post('/signup', {
    ...kakaoInfo,
    nickname
  });
};
