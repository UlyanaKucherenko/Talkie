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
  newMessageStatus: Status;
  currentPage: number;
  pagination: IPagination;
};

const initialState: IMessages = {
  messages: [],
  currentPage: 1,
  pagination: {
    page: 0,
    perPage: 0,
    totalPages: 0,
  },
  messagesStatus: Status.Idle,
  newMessageStatus: Status.Idle,
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
    SET_CURRENT_PAGE: (state, { payload }) => {
      const { page } = payload;
      state.currentPage = page;
    },
    SET_MESSAGES: (state, { payload }) => {
      console.log('payload', payload.payload.msg);
      const { msg } = payload.payload;

      const newMsg: Message = {
        _id: msg._id,
        roomId: msg.roomId,
        content: msg.content,
        owner: {
          _id: msg._id,
          name: msg.name,
          avatarURL: msg.avatarURL,
        },
        replys: [
          {
            _id: msg._id,
            content: msg.content,
            owner: {
              _id: msg.id,
              name: msg.name,
              avatarURL: msg.avatarURL,
            },
            createdAt: msg.createdAt,
            updatedAt: msg.createdAt,
          },
        ],
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

          return {
            ...state,
            messagesStatus: Status.Succeeded,
            messages: [...state.messages, ...payload.messages],

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
      }))

      // response new message //

      .addCase(chatThunks.createMessage.pending, (state) => ({
        ...state,
        newMessageStatus: Status.Loading,
      }))
      .addCase(
        chatThunks.createMessage.fulfilled,
        (state, { payload }: PayloadAction<Message>) => {
          console.log('createMessage', payload);
          const { msg } = payload;

          const newMsg: Message = {
            _id: msg._id,
            roomId: msg.roomId,
            content: msg.content,
            owner: {
              _id: msg._id,
              name: msg.name,
              avatarURL: msg.avatarURL,
            },
            replys: [
              {
                _id: msg._id,
                content: msg.content,
                owner: {
                  _id: msg.id,
                  name: msg.name,
                  avatarURL: msg.avatarURL,
                },
                createdAt: msg.createdAt,
                updatedAt: msg.createdAt,
              },
            ],
            createdAt: msg.createdAt,
            updatedAt: msg.updatedAt,
          };

          return {
            ...state,
            newMessageStatus: Status.Succeeded,
            messages: [newMsg, ...state.messages],
          };
        }
      )
      .addCase(chatThunks.createMessage.rejected, (state) => ({
        ...state,
        newMessageStatus: Status.Failed,
      }));

    //
  },
});

export const { RESET_MESSAGES, SET_CURRENT_PAGE, SET_MESSAGES } =
  chatSlice.actions;
export const chatSelector = (state: RootState) => state.chat;
