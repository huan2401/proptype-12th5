import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CONFIG_ACCESS_TOKEN, REACT_APP_API_URL } from '@/constants/config';
import Cookies from 'js-cookie';

const TYPE_TOKEN = 'bearer';

const APIGateway = axios.create({
  baseURL: REACT_APP_API_URL,
});

const requestInterceptor = async (config: AxiosRequestConfig) => {
  const token = Cookies.get(CONFIG_ACCESS_TOKEN);
  if (token) {
    config.headers['Authorization'] = `${TYPE_TOKEN} ${token}`;
  }
  return config;
};

const responseInterceptor = (response: AxiosResponse<any>) => {
  return response.data;
};

APIGateway.interceptors.request.use(requestInterceptor);
APIGateway.interceptors.response.use(responseInterceptor);

export default APIGateway;
