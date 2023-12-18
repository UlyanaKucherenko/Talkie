/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index';
import http from '../../api/http';
import { Status } from '../../utils/enums/status.enum';
import { Message, ResponseMessages } from '../../utils/types/chat.type';

export type INewMessage = {
  nick: string;
  msg: string;
  date: string;
};

export type IPagination = {
  page: number;
  perPage: number;
  totalPages: number;
};

export type IMessages = {
  messages: Message[];
  messagesStatus: Status;
  pagination: IPagination;
};

const initialState: IMessages = {
  messages: [],
  pagination: {
    page: 0,
    perPage: 0,
    totalPages: 0,
  },
  messagesStatus: Status.Idle,
};

export const chatThunks = {
  getMessages: createAsyncThunk(
    'chat/getMessages',
    async ({
      roomId,
      page,
      limit = 10,
    }: {
      roomId: string;
      page?: number;
      limit?: number;
    }) => {
      const data = await http.chat.getMessages({ roomId, page, limit });
      // console.log('data =>', data);
      return data;
    }
  ),

  createMessage: createAsyncThunk(
    'chat/createMessage',
    async ({ roomId, content }: { roomId: string; content: string }) => {
      const response = await http.chat.postMessage(roomId, { content });
      // console.log('createMessage:', response);
      return response;
    }
  ),
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    RESET_MESSAGES: (state) => {
      Object.assign(state, initialState);
    },

    SET_MESSAGES: (state, { payload }) => {
      // console.log('payload', payload);
      const msg = payload;

      const newMsg: Message = {
        _id: msg._id,
        roomId: msg.roomId,
        content: msg.content,
        owner: {
          _id: msg.owner._id,
          name: msg.owner.name,
          avatarURL: msg.owner.avatarURL,
        },
        replys: msg.replys,
        createdAt: msg.createdAt,
        updatedAt: msg.updatedAt,
      };
      state.messages = [newMsg, ...state.messages];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(chatThunks.getMessages.pending, (state) => ({
        ...state,
        messagesStatus: Status.Loading,
      }))
      .addCase(
        chatThunks.getMessages.fulfilled,
        (state, action: PayloadAction<ResponseMessages>) => {
          const { payload } = action;

          const existingMessageIds = new Set(
            state.messages.map((msg) => msg._id)
          );

          // Filter out messages that already exist in the state
          const uniqueMessages = payload.messages.filter(
            (msg) => !existingMessageIds.has(msg._id)
          );

          return {
            ...state,
            messagesStatus: Status.Succeeded,
            messages: [...state.messages, ...uniqueMessages],

            pagination: {
              page: Number(payload.page),
              perPage: Number(payload.perPage),
              totalPages: Number(payload.totalPages),
            },
          };
        }
      )
      .addCase(chatThunks.getMessages.rejected, (state) => ({
        ...state,
        messagesStatus: Status.Failed,
      }));
  },
});

export const { RESET_MESSAGES, SET_MESSAGES } = chatSlice.actions;
export const chatSelector = (state: RootState) => state.chat;
