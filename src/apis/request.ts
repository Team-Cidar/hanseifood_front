import axios from 'axios';
import { DOMAIN } from './domain';

export const request = axios.create({ baseURL: DOMAIN.main });
