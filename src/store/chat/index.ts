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
  // message: Message | null;
  // messageStatus: Status;
};

const initialState: IMessages = {
  messages: [],
  pagination: {
    page: 0,
    perPage: 0,
    totalPages: 0,
  },
  messagesStatus: Status.Idle,
  // message: null,
  // messageStatus: Status.Idle,
};

export const chatThunks = {
  getMessages: createAsyncThunk('chat/getMessages', async (roomId: string) => {
    const data = await http.chat.getMessages(roomId);
    // console.log('data', data);
    return data;
  }),

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
  reducers: {},
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
            messages: [...payload.messages],
            pagination: {
              page: payload.page,
              perPage: payload.perPage,
              totalPages: payload.totalPages,
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

    //     return {
    //       ...state,
    //       messageStatus: Status.Succeeded,
    //       message: payload,
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

export const chatSelector = (state: RootState) => state.chat;