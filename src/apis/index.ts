import { request } from "./request";

export const requestDayFood = () => {
  request.get('/menus/day');
};

export const requestWeekFood = () => {
  request.get('menus/week');
};
