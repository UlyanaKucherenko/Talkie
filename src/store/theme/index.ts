import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ThemeEnum } from '../../utils/const';
import type { RootState } from '../index';

export interface ITheme {
  mode: ThemeEnum;
}

const initialState: ITheme = {
  mode: ThemeEnum.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    TOGGLE_THEME: (state, { payload }: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.mode = payload ? ThemeEnum.DARK : ThemeEnum.LIGHT;
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const { TOGGLE_THEME } = themeSlice.actions;
export const themeSelector = (state: RootState) => state.theme;
