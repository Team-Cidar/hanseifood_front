import { request } from "./request";

export const requestFood = () => {
  request.get('/');
}