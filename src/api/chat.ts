import axios from 'axios';

import { apiRoutes } from './api-routes';
import {
  Message,
  ResponseMessages,
  SendMessage,
} from '../utils/types/chat.type';

const getToken = () => {
  const token = localStorage.getItem('userToken');
  return token;
};

export const getMessages = async ({
  roomId,
  page = 1,
  limit = 10,
}: {
  roomId: string;
  page?: number;
  limit?: number;
}): Promise<ResponseMessages> => {
  try {
    const token = getToken();
    const res = await axios.get(
      `${apiRoutes.messages}/${roomId}?page=${page}&limit=${limit}`,
      {
        headers: {
          ApiKey: token,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

export const postMessage = async (
  roomId: string,
  content: SendMessage
): Promise<Message> => {
  try {
    const token = getToken();
    const res = await axios.post(`${apiRoutes.messages}/${roomId}`, content, {
      headers: {
        ApiKey: token,
      },
    });
    // console.log('postMessage:', res.data);
    return res.data;
  } catch (error) {
    console.error('Error posting message:', error);
    throw error;
  }
};
