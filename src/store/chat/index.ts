/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index';
import http from '../../api/http';
import { Status } from '../../utils/enums/status.enum';
import { Message, ResponseMessages } from '../../utils/types/chat.type';
import {
  TypeGroupedMessages,
  groupMessagesByDate,
} from '../../utils/groupMessagesByDate';

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
  currentPage: number;
  pagination: IPagination;
  groupedMessages: TypeGroupedMessages;
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
  groupedMessages: {},
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
    SET_MESSAGES: (state) => {
      state.groupedMessages = groupMessagesByDate(state.messages);
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
      }));

    // response new message //

    // .addCase(chatThunks.createMessage.pending, (state) => ({
    //   ...state,
    //   messageStatus: Status.Loading,
    // }))
    // .addCase(
    //   chatThunks.createMessage.fulfilled,
    //   (state, action: PayloadAction<Message>) => {
    //     const { payload } = action;
    //     console.log(payload);

    //     return {
    //       ...state,
    //       messageStatus: Status.Succeeded,
    //       message: payload,
    //       // messages: [payload, ...state.messages],
    //     };
    //   }
    // )
    // .addCase(chatThunks.createMessage.rejected, (state) => ({
    //   ...state,
    //   messageStatus: Status.Failed,
    // }));

    //
  },
});

export const { RESET_MESSAGES, SET_CURRENT_PAGE, SET_MESSAGES } =
  chatSlice.actions;
export const chatSelector = (state: RootState) => state.chat;
