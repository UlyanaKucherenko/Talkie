import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';
import { themeSlice } from './theme';
import { roomsSlice } from './rooms';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    theme: themeSlice.reducer,
    rooms: roomsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
