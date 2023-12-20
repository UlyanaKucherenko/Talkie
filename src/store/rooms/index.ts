import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../index.js';
import { Status } from '../../utils/enums/status.enum.js';
import { PublicRoomsData, RoomsState } from '../../utils/types/rooms.type.js';
import http from '../../api/http.js';

const initialState: RoomsState = {
  publicRoomsData: null,
  status: Status.Idle,
  error: null,
};
export const roomsThunks = {
  getPublicRooms: createAsyncThunk('rooms/getPublicRooms', async () => {
    const data = await http.rooms.getPublicRooms();
    return data;
  }),

  // private
  createPrivateRoom: createAsyncThunk(
    'rooms/postPrivateRoom',
    async (guestId: string) => {
      const response = await http.rooms.postPrivateRoom(guestId);
      // console.log('postPrivateRoom:', response);
      return response;
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
      );
  },
});

export const roomsSelector = (state: RootState) => state.rooms;
