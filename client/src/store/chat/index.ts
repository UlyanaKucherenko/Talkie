import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index';

export interface IMessage {
  id: string;
  msg: string;
  nick: string;
  roomId: string;
  date: string;
}

export interface IChat {
  messages: IMessage[];
}

const initialState: IChat = {
  messages: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    ADD_MESSAGES: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { ADD_MESSAGES } = chatSlice.actions;
export const chatSelector = (state: RootState) => state.chat;

export default chatSlice.reducer;
