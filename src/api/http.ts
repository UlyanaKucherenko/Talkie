import { registration, logout, getCurrentUser } from './users';
import {
  getPublicRooms,
  getRoomById,
  postPrivateRoom,
  getPrivateRooms,
  deleteRoom,
} from './rooms';
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
    getPrivateRooms,
    deleteRoom,
  },
  chat: {
    getMessages,
    postMessage,
  },
} as const;

export default http;
