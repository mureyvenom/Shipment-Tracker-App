import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { AuthApi } from './services/auth.service';
import { FrappeApi } from './services/frappe.service';
import user from './reducers/user.reducer';
import settings from './reducers/settings.reducer';
import shipments from './reducers/shipments.reducer';

const reducers = combineReducers({
  user,
  settings,
  shipments,
  [AuthApi.reducerPath]: AuthApi.reducer,
  [FrappeApi.reducerPath]: FrappeApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([AuthApi.middleware, FrappeApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
