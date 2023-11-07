import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';
import { themeSlice } from './theme';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
