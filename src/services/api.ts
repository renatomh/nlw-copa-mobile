import axios from 'axios';

import { BASE_URL } from '@env';

/* This line might be required to 'pre-load' the base URL from '.env' */
/* Otherwise, axios might not able to make the requests when getting data from .env */
console.log(BASE_URL);

export const api = axios.create({
  baseURL: BASE_URL,
});
