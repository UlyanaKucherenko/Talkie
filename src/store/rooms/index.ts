import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index.js';
import { Status } from '../../utils/enums/status.enum.js';
import { PublicRoomsData, RoomsState } from '../../utils/types/rooms.type.js';
import http from '../../api/http.js';

const initialState: RoomsState = {
  publicRoomsData: null,
  myPublicRoomsData: null,
  status: Status.Idle,
  error: null,
};
export const roomsThunks = {
  getPublicRooms: createAsyncThunk(
    'rooms/getPublicRooms',
    async (currentPage: number) => {
      const data = await http.rooms.getPublicRooms(currentPage);
      return data;
    }
  ),
  getOwnPublicRooms: createAsyncThunk(
    'rooms/getOwnPublicRooms',
    async (currentPage: number) => {
      const data = await http.rooms.getOwnPublicRooms(currentPage);
      return data;
    }
  ),
  getPublicRoomsWithoutOwn: createAsyncThunk(
    'rooms/getPublicRoomsWithoutOwn',
    async (currentPage: number) => {
      const data = await http.rooms.getPublicRoomsWithoutOwn(currentPage);
      return data;
    }
  ),
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(roomsThunks.getPublicRooms.pending, (state) => ({
        ...state,
        status: Status.Loading,
      }))
      .addCase(
        roomsThunks.getPublicRooms.fulfilled,
        (state, { payload }: PayloadAction<PublicRoomsData>) => ({
          ...state,
          status: Status.Succeeded,
          publicRoomsData: payload,
        })
      )
      .addCase(
        roomsThunks.getPublicRooms.rejected,
        (state, { error }): RoomsState => ({
          ...state,
          status: Status.Failed,
          error: error.message || null,
        })
      )
      .addCase(roomsThunks.getOwnPublicRooms.pending, (state) => ({
        ...state,
        status: Status.Loading,
      }))
      .addCase(
        roomsThunks.getOwnPublicRooms.fulfilled,
        (state, { payload }: PayloadAction<PublicRoomsData>) => ({
          ...state,
          myPublicRoomsData: payload,
          status: Status.Succeeded,
        })
      )
      .addCase(
        roomsThunks.getOwnPublicRooms.rejected,
        (state, { error }): RoomsState => ({
          ...state,
          status: Status.Failed,
          error: error.message || null,
        })
      )
      .addCase(roomsThunks.getPublicRoomsWithoutOwn.pending, (state) => ({
        ...state,
        status: Status.Loading,
      }))
      .addCase(
        roomsThunks.getPublicRoomsWithoutOwn.fulfilled,
        (state, { payload }: PayloadAction<PublicRoomsData>) => ({
          ...state,
          status: Status.Succeeded,
          publicRoomsData: payload,
        })
      )
      .addCase(
        roomsThunks.getPublicRoomsWithoutOwn.rejected,
        (state, { error }): RoomsState => ({
          ...state,
          status: Status.Failed,
          error: error.message || null,
        })
      );
  },
});

export const roomsSelector = (state: RootState) => state.rooms;
