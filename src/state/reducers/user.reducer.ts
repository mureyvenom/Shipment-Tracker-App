import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type AuthState = {
  user?: {
    full_name: string;
  };
  // token: string;
};

const slice = createSlice({
  name: 'user',
  initialState: {
    user: undefined,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user } }: PayloadAction<{ user: typeof state.user }>,
    ) => {
      state.user = user;
      // state.token = token;
      // state.tokenExpiration = new Date(
      //   new Date().getTime() + 1 * 60 * 60 * 1000,
      // ).toISOString();
    },
    updateCredentials: (
      state,
      { payload: { user } }: PayloadAction<{ user: typeof state.user }>,
    ) => {
      state.user = user;
    },
    // updateToken: (
    //   state,
    //   { payload: { token } }: PayloadAction<{ token: string }>,
    // ) => {
    //   state.token = token;
    //   // state.tokenExpiration = new Date(
    //   //   new Date().getTime() + 1 * 60 * 60 * 1000,
    //   // ).toISOString();
    // },
    signUserOut: state => {
      // state.token = undefined;
      state.user = undefined;
    },
  },
});

export const { setCredentials, updateCredentials, signUserOut } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectAuthObject = (state: RootState) => state.user;
