import { registration, logout, getCurrentUser } from './users';
import { getPublicRooms, getRoomById } from './rooms';

const http = {
  user: {
    registration,
    logout,
    getCurrentUser,
  },
  rooms: {
    getPublicRooms,
    getRoomById,
  },
} as const;

export default http;
