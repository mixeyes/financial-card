import { ENDPOINTS } from './endpoints';
import { axiosInstance } from './instance';

export const getUserAPI = async (): Promise<Record<string, boolean>> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.User}`);

  return data;
};
