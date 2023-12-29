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

export const requestUploadMenu = (dateTime, only_employee, has_additional, student, employee, additional) => {
  return request.post('/back/menu', {
    dateTime,
    only_employee,
    has_additional,
    student,
    employee,
    additional,
  });
};