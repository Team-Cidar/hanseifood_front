import { request } from "./request";

export const requestDayFood = () => {
  return request.get('/menus/day');
};

export const requestWeekFood = () => {
  return request.get('/menus/week');
};
