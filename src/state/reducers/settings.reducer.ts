import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type StateType = {
  splashLoaded: boolean;
  // biometrics: boolean;
  // colorScheme: 'dark' | 'light' | 'system';
};

const slice = createSlice({
  name: 'settings',
  initialState: {
    splashLoaded: false,
  } as StateType,
  reducers: {
    updateSplashStatus: (
      state,
      { payload: { value } }: PayloadAction<{ value: boolean }>,
    ) => {
      state.splashLoaded = value;
    },
    // updateBiometrics: (
    //   state,
    //   { payload: { value } }: PayloadAction<{ value: boolean }>,
    // ) => {
    //   state.biometrics = value;
    // },
    // updateColorScheme: (
    //   state,
    //   {
    //     payload: { value },
    //   }: PayloadAction<{ value: 'dark' | 'light' | 'system' }>,
    // ) => {
    //   state.colorScheme = value;
    // },
  },
});

export const { updateSplashStatus } = slice.actions;

export default slice.reducer;

export const selectSettingsObject = (state: RootState) => state.settings;
