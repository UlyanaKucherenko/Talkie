import { registration, logout, getCurrentUser } from './users';

const http = {
  user: {
    registration,
    logout,
    getCurrentUser,
  },
} as const;

export default http;
