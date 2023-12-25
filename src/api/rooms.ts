import axios from 'axios';
import { getToken } from '../utils/user-token';

import { apiRoutes } from './api-routes';
import type {
  CreateRoomData,
  PublicRoomsData,
} from '../utils/types/rooms.type';

export const getPublicRooms = async (): Promise<PublicRoomsData> => {
  const res = await axios.get(apiRoutes.publicRooms);
  return res.data;
};

export const getOwnPublicRooms = async (): Promise<PublicRoomsData> => {
  const token = getToken();
  const res = await axios.get(apiRoutes.ownPublicRooms, {
    headers: {
      ApiKey: token,
    },
  });
  return res.data;
};
export const getPublicRoomsWithoutOwn = async (): Promise<PublicRoomsData> => {
  const token = getToken();
  const res = await axios.get(apiRoutes.publicRoomsWithoutOwn, {
    headers: {
      ApiKey: token,
    },
  });
  return res.data;
};

export const getRoomById = async (id: string): Promise<PublicRoomsData> => {
  const token = getToken();
  const res = await axios.get(`${apiRoutes.rooms}/${id}`, {
    headers: {
      ApiKey: token,
    },
  });
  return res.data;
};

export const createPublicRoom = async (data: CreateRoomData): Promise<any> => {
  const token = getToken();
  try {
    const res = await axios.post(apiRoutes.publicRooms, data, {
      headers: {
        ApiKey: token,
      },
    });
    return res;
  } catch (error) {
    console.log('Error creating public room', error);
    throw error;
  }
};
