import { configureStore } from "@reduxjs/toolkit";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import persistStore from "redux-persist/es/persistStore";
import {  persistedUsereReducer } from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: persistedUsereReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

