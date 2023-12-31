import axios from 'axios';
import { getToken } from '../utils/user-token';

import { apiRoutes } from './api-routes';
import type {
  CreateRoomData,
  GetRoomsProps,
  PrivateRoom,
  PrivateRoomsData,
  PublicRoomsData,
} from '../utils/types/rooms.type';

export const getPublicRooms = async ({
  currentPage,
  topic = '',
}: GetRoomsProps): Promise<PublicRoomsData> => {
  const res = await axios.get(
    `${apiRoutes.publicRooms}?page=${currentPage}&topic=${topic}`
  );
  return res.data;
};

export const getOwnPublicRooms = async ({
  currentPage,
  topic = '',
}: GetRoomsProps): Promise<PublicRoomsData> => {
  const token = getToken();
  const res = await axios.get(
    `${apiRoutes.ownPublicRooms}?page=${currentPage || 1}&topic=${topic}`,
    {
      headers: {
        ApiKey: token,
      },
    }
  );
  return res.data;
};
export const getPublicRoomsWithoutOwn = async ({
  currentPage,
  topic = '',
}: GetRoomsProps): Promise<PublicRoomsData> => {
  const token = getToken();
  const res = await axios.get(
    `${apiRoutes.publicRoomsWithoutOwn}?page=${currentPage}&topic=${topic}`,
    {
      headers: {
        ApiKey: token,
      },
    }
  );
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

// private
export const postPrivateRoom = async (
  guestId: string
): Promise<PrivateRoom> => {
  const token = getToken();
  try {
    const res = await axios.post(
      `${apiRoutes.privateRooms}/${guestId}`,
      {},
      {
        headers: {
          ApiKey: token,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log('Error creating private room', error);
    throw error;
  }
};

export const getPrivateRooms = async ({
  page = 1,
  limit = 10,
  query = '',
}: {
  page?: number;
  limit?: number;
  query?: string;
}): Promise<PrivateRoomsData> => {
  const token = getToken();
  try {
    const res = await axios.get(
      `${apiRoutes.privateRooms}?page=${page}&limit=${limit}&query=${query}`,

      {
        headers: {
          ApiKey: token,
        },
      }
    );
    // console.log('getPrivateRooms', res);
    return res.data;
  } catch (error) {
    console.log('Error get private rooms', error);
    throw error;
  }
};

export const deleteRoom = async (id: string): Promise<unknown> => {
  const token = getToken();
  try {
    const res = await axios.delete(`${apiRoutes.rooms}/${id}`, {
      headers: {
        ApiKey: token,
      },
    });
    console.log('deleteRoom', res);
    return res.data;
  } catch (error) {
    console.log('Error deleteRoom ', error);
    throw error;
  }
};

export const searchRooms = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}): Promise<PublicRoomsData> => {
  const token = getToken();
  const res = await axios.get(
    `${apiRoutes.rooms}?query=${query}&page=${currentPage}`,
    {
      headers: {
        ApiKey: token,
      },
    }
  );
  return res.data;
};
