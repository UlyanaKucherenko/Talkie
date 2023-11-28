import axios from 'axios';

import { apiRoutes } from './api-routes';
import type { PublicRoomsData } from '../utils/types/rooms.type';

export const getPublicRooms = async (): Promise<PublicRoomsData> => {
  const res = await axios.get(apiRoutes.publicRooms);
  return res.data;
};

export const getRoomById = async (
  id: string,
  token: string
): Promise<PublicRoomsData> => {
  const res = await axios.get(`${apiRoutes.rooms}/${id}`, {
    headers: {
      ApiKey: token,
    },
  });
  return res.data;
};
