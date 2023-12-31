import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phoneSlice } from './phoneSlice';
import { filterSlice } from './filterSlice';

const rootReduser = combineReducers({ phones: phoneSlice.reducer });

const persistConfig = {
  key: 'root',
  storage,
};

const persistRed = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: { persistRed, filter: filterSlice.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
