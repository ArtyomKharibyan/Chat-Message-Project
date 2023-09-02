import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import chatReducer from "./ChatSlices";

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void, ExtraArgument = never> = ThunkAction<ReturnType,
  RootState,
  ExtraArgument,
  Action<string>>;
export type RootState = ReturnType<typeof store.getState>;

export default store;
