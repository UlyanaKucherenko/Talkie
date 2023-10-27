import axios from 'axios';
import { apiRoutes } from './api-routes';
import type { UserRequest, UserResponse, User } from '../utils/types/user.type';

const baseUrl = import.meta.env.VITE_SERVER_HOST;

export const registration = async (
  data: UserRequest
): Promise<UserResponse> => {
  const res = await axios.post(baseUrl + apiRoutes.register, data);
  return res.data;
};

export const logout = async (): Promise<void> => {
  await axios.post(baseUrl + apiRoutes.logout);
};

export const getCurrentUser = async (): Promise<User> => {
  const res = await axios.get(baseUrl + apiRoutes.current);
  return res.data;
};
