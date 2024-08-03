import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
  responseType: 'json',
});

export const addLocaleToHeaders = (locale: string) => {
  axiosInstance.defaults.headers.common['App-Locale'] = locale;
};
