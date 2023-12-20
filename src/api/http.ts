import { registration, logout, getCurrentUser } from './users';
import { getPublicRooms, getRoomById, postPrivateRoom } from './rooms';
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
    postPrivateRoom,
  },
  chat: {
    getMessages,
    postMessage,
  },
} as const;

export default http;
