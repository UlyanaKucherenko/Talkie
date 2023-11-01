import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
