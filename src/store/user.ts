import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { UserResponse, UserState } from '../utils/types/user.type';
import { getCurrentUser, logout, registration } from '../api/http';
import { UserRequest } from '../utils/types/user.type';
import type { RootState } from './index';
import { deleteToken, getToken, saveToken } from '../utils/user-token';

const userInitialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

export const auth = {
  register: createAsyncThunk('user/register', async (user: UserRequest) => {
    const data = await registration(user);
    saveToken(data.token);
    return data;
  }),
  logout: createAsyncThunk('user/logout', async () => {
    await logout();
    deleteToken();
  }),
  currentUser: createAsyncThunk('user/current', async () => {
    const token = getToken();
    if (!token) {
      throw new Error();
    }
    const data = await getCurrentUser(token);
    return { token, user: { ...data } } as UserResponse;
  }),
};

export const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(auth.register.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(
        auth.register.fulfilled,
        (state, action: PayloadAction<UserResponse>) => ({
          ...state,
          status: 'succeeded',
          user: action.payload,
        })
      )
      .addCase(
        auth.register.rejected,
        (state, action): UserState => ({
          ...state,
          status: 'failed',
          error: action.error.message || null,
        })
      )
      .addCase(auth.logout.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(auth.logout.fulfilled, () => ({
        status: 'idle',
        user: null,
        error: null,
      }))
      .addCase(
        auth.logout.rejected,
        (state, action): UserState => ({
          ...state,
          status: 'idle',
          error: action.error.message || null,
        })
      )
      .addCase(auth.currentUser.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(
        auth.currentUser.fulfilled,
        (state, action: PayloadAction<UserResponse>) => ({
          ...state,
          status: 'succeeded',
          user: { user: action.payload.user, token: action.payload.token },
        })
      )
      .addCase(
        auth.currentUser.rejected,
        (state, action): UserState => ({
          ...state,
          status: 'idle',
          error: action.error.message || null,
        })
      );
  },
});

export const userSelector = (state: RootState) => state.user;
