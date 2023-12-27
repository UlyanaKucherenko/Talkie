import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user';
import { themeSlice } from './theme';
import { roomsSlice } from './rooms';
import { chatSlice } from './chat';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    theme: themeSlice.reducer,
    rooms: roomsSlice.reducer,
    chat: chatSlice.reducer,
  },
});

// Check local storage for theme preference on store initialization
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  store.dispatch(themeSlice.actions.TOGGLE_THEME());
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
