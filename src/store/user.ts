import { createSlice } from '@reduxjs/toolkit';
import type { UserState } from '../utils/types/user.type';
import type { RootState } from './index';

const userInitialState: UserState = {
  user: null,
  status: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {},
});

export const userSelector = (state: RootState) => state.user;
