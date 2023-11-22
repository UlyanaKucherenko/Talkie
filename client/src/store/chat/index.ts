import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index';

export interface IMessage {
  id: string;
  msg: string;
  nick: string;
  date: string;
}

export interface IMessages {
  messages: IMessage[];
}

const initialState: IMessages = {
  messages: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    ADD_LIST_MESSAGES: (state, action) => ({
      ...state,
      messages: [...state.messages, ...action.payload],
    }),
  },
});

export const { ADD_LIST_MESSAGES } = chatSlice.actions;
export const chatSelector = (state: RootState) => state.chat;
