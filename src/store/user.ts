import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { UserResponse, UserState } from '../utils/types/user.type';
import http from '../api/http';
import { UserRequest } from '../utils/types/user.type';
import type { RootState } from './index';
import { deleteToken, getToken, saveToken } from '../utils/user-token';
import { Status } from '../utils/enums/status.enum';

const userInitialState: UserState = {
  userData: null,
  status: Status.Idle,
  error: null,
};

export const authThunks = {
  register: createAsyncThunk('user/register', async (user: UserRequest) => {
    const data = await http.user.registration(user);
    saveToken(data.token);
    return data;
  }),
  logout: createAsyncThunk('user/logout', async () => {
    const token = getToken();
    if (!token) {
      throw new Error();
    }
    await http.user.logout(token);
    deleteToken();
  }),
  currentUser: createAsyncThunk('user/current', async () => {
    const token = getToken();
    if (!token) {
      throw new Error();
    }
    const data = await http.user.getCurrentUser(token);
    return { token, user: { ...data } };
  }),
};

export const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authThunks.register.pending, (state) => ({
        ...state,
        status: Status.Loading,
      }))
      .addCase(
        authThunks.register.fulfilled,
        (state, action: PayloadAction<UserResponse>) => ({
          ...state,
          status: Status.Succeeded,
          userData: action.payload,
        })
      )
      .addCase(
        authThunks.register.rejected,
        (state, action): UserState => ({
          ...state,
          status: Status.Failed,
          error: action.error.message || null,
        })
      )
      .addCase(authThunks.logout.pending, (state) => ({
        ...state,
        status: Status.Loading,
      }))
      .addCase(authThunks.logout.fulfilled, () => ({
        status: Status.Idle,
        userData: null,
        error: null,
      }))
      .addCase(
        authThunks.logout.rejected,
        (state, action): UserState => ({
          ...state,
          status: Status.Idle,
          error: action.error.message || null,
        })
      )
      .addCase(authThunks.currentUser.pending, (state) => ({
        ...state,
        status: Status.Loading,
      }))
      .addCase(
        authThunks.currentUser.fulfilled,
        (state, action: PayloadAction<UserResponse>) => ({
          ...state,
          status: Status.Succeeded,
          userData: { user: action.payload.user, token: action.payload.token },
        })
      )
      .addCase(
        authThunks.currentUser.rejected,
        (state, action): UserState => ({
          ...state,
          status: Status.Idle,
          error: action.error.message || null,
        })
      );
  },
});

export const userSelector = (state: RootState) => state.user;
