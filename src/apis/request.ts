import axios from 'axios';
import { DOMAIN } from './domain';

const request = axios.create({ baseURL: DOMAIN.local, timeout: 1000 });

request.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const errorStatus = [ 500, 501, 502, 503 ];
    if (errorStatus.includes(error.response.status)) {
      window.location.href = '/maintenance';
    }
    return Promise.reject(error);
  }
);

export default request;