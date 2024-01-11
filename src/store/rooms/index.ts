/* eslint-disable no-underscore-dangle */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index.js';
import { Status } from '../../utils/enums/status.enum.js';
import {
  GetRoomsProps,
  PrivateRoomsData,
  PublicRoomsData,
  RoomsState,
} from '../../utils/types/rooms.type.js';
import http from '../../api/http.js';

const initialState: RoomsState = {
  publicRoomsData: null,
  status: Status.Idle,
  error: null,
  myPublicRoomsData: null,
  myPublicRoomsStatus: Status.Idle,
  myPublicRoomsError: null,
  privateRoomsData: null,
  privateRoomsStatus: Status.Idle,
  privateRoomsError: null,
  privateRoomsIds: [],
  roomData: null,
  statusRoom: Status.Idle,
};
export const roomsThunks = {
  // public
  getPublicRooms: createAsyncThunk(
    'rooms/getPublicRooms',
    async ({ currentPage, topic, query }: GetRoomsProps) => {
      const data = await http.rooms.getPublicRooms({
        currentPage,
        topic,
        query,
      });
      return data;
    }
  ),
  getOwnPublicRooms: createAsyncThunk(
    'rooms/getOwnPublicRooms',
    async ({ currentPage, topic, query }: GetRoomsProps) => {
      const data = await http.rooms.getOwnPublicRooms({
        currentPage,
        topic,
        query,
      });
      return data;
    }
  ),
  getPublicRoomsWithoutOwn: createAsyncThunk(
    'rooms/getPublicRoomsWithoutOwn',
    async ({ currentPage, topic, query }: GetRoomsProps) => {
      const data = await http.rooms.getPublicRoomsWithoutOwn({
        currentPage,
        topic,
        query,
      });
      return data;
    }
  ),
  // private
  createPrivateRoom: createAsyncThunk(
    'rooms/postPrivateRoom',
    async (guestId: string) => {
      const response = await http.rooms.postPrivateRoom(guestId);
      // console.log('createPrivateRoom Store:', response);
      return response;
    }
  ),

  getPrivateRooms: createAsyncThunk(
    'rooms/getPrivateRooms',
    async ({
      page = 1,
      limit = 6,
      query,
    }: {
      page?: number;
      limit?: number;
      query?: string;
    }) => {
      const data = await http.rooms.getPrivateRooms({ page, limit, query });
      // console.log('getPrivateRooms data STORE =>', data);
      return data;
    }
  ),

  deleteRoom: createAsyncThunk('rooms/deleteRoom', async (roomId: string) => {
    const response = await http.rooms.deleteRoom(roomId);
    // console.log('createPrivateRoom Store:', response);
    return response;
  }),

  getRoomById: createAsyncThunk('rooms/getRoomById', async (roomId: string) => {
    const response = await http.rooms.getRoomById(roomId);
    // console.log('getRoomById Store:', response);
    return response;
  }),
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

      // private
      .addCase(roomsThunks.getPrivateRooms.pending, (state) => ({
        ...state,
        privateRoomsStatus: Status.Loading,
      }))
      .addCase(
        roomsThunks.getPrivateRooms.fulfilled,
        (state, action: PayloadAction<PrivateRoomsData>) => {
          const { payload } = action;
          const privateRoomsIds = payload?.rooms.map((room) => room._id) || [];

          return {
            ...state,
            privateRoomsStatus: Status.Succeeded,
            privateRoomsData: payload,
            privateRoomsIds,
          };
        }
      )
      .addCase(roomsThunks.getPrivateRooms.rejected, (state) => ({
        ...state,
        privateRoomsError: Status.Failed,
      }))
      .addCase(roomsThunks.getOwnPublicRooms.pending, (state) => ({
        ...state,
        myPublicRoomsStatus: Status.Loading,
      }))
      .addCase(
        roomsThunks.getOwnPublicRooms.fulfilled,
        (state, { payload }: PayloadAction<PublicRoomsData>) => ({
          ...state,
          myPublicRoomsData: payload,
          myPublicRoomsStatus: Status.Succeeded,
        })
      )
      .addCase(
        roomsThunks.getOwnPublicRooms.rejected,
        (state, { error }): RoomsState => ({
          ...state,
          status: Status.Failed,
          myPublicRoomsError: error.message || null,
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
