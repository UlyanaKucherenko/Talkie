import { registration, logout, getCurrentUser } from './users';

const http = {
  user: {
    registration,
    logout,
    getCurrentUser,
  },
};

export default http;
