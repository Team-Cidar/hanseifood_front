import axios from 'axios';
import { DOMAIN } from './domain';

const request = axios.create({ baseURL: DOMAIN.main, timeout: 1000 });

request.interceptors.request.use(
  async (config) => {
    const accessToken = await localStorage.getItem('access_token');
    if (!accessToken) {
      config.headers.Authorization = null;
      return config;
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
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
