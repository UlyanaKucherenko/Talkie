import { registration, logout, getCurrentUser } from './users';
import { getPublicRooms } from './rooms';

const http = {
  user: {
    registration,
    logout,
    getCurrentUser,
  },
  rooms: {
    getPublicRooms,
  },
} as const;

export default http;
