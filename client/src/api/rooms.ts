import axios from 'axios';

import { apiRoutes } from './api-routes';
import type { PublicRoomsData } from '../utils/types/rooms.type';

export const getPublicRooms = async (): Promise<PublicRoomsData> => {
  const res = await axios.get(apiRoutes.publicRooms);
  return res.data;
};
