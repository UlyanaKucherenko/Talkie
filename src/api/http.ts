import { registration, logout, getCurrentUser } from './users';
import {
  getPublicRooms,
  getOwnPublicRooms,
  getPublicRoomsWithoutOwn,
  getRoomById,
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
    getOwnPublicRooms,
    getPublicRoomsWithoutOwn,
    getRoomById,
  },
  chat: {
    getMessages,
    postMessage,
  },
} as const;

export default http;
