import { registration, logout, getCurrentUser } from './users';
import { getPublicRooms, getRoomById } from './rooms';
import { getMessages, postMessage } from './chat';

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
  chat: {
    getMessages,
    postMessage,
  },
} as const;

export default http;
