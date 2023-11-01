import axios from 'axios';
import { apiRoutes } from './api-routes';
import type { UserRequest, UserResponse, User } from '../utils/types/user.type';

export const registration = async (
  data: UserRequest
): Promise<UserResponse> => {
  const res = await axios.post(apiRoutes.register, data);
  return res.data;
};

export const logout = async (): Promise<void> => {
  await axios.post(apiRoutes.logout);
};

export const getCurrentUser = async (token: string): Promise<User> => {
  const res = await axios.get(apiRoutes.current, {
    headers: {
      ApiKey: token,
    },
  });
  return res.data;
};
