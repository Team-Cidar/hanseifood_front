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

export const requestUploadMenu = (datetime: string, student: string, employee: string, additional: string) => {
  return request.post('/back/menus', {
    datetime,
    student,
    employee,
    additional,
  });
};

export const requestExcelWeekFood = (dateTime: string) => {
  return request.get(`/back/menus/excel?date=${dateTime.replace(/-/g, '')}`, {
    responseType: 'blob',
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

export const requestTokenVerify = (accessToken: string) => {
  return request.post('/token/verify', {
    'token': accessToken,
  });
};

export const requestMenusByLike = (pageNo: number = 1, pageSize: number = 10) => {
  return request.get(`/likes/menus/users?pageNo=${pageNo}&pageSize=${pageSize}`);
}

export const requestToggleLike = (menuId: string) => {
  return request.post('/likes/menus', {
    menuId: menuId
  })
}

export const requestMenuHistory = (dateTime: string, menuType: string) => {
  return request.get(`/back/menus/history?date=${dateTime}&menuType=${menuType}`)
}