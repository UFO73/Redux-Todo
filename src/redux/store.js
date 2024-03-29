import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { tasksReducer, filtersReducer } from './reducer'

const persistConfig = {
  'key': 'root',
  storage,
}

const rootReducer = combineReducers({
  'tasks': tasksReducer,
  'filters': filtersReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  'reducer': persistedReducer,
  'middleware': (getDefaultMiddleware) => getDefaultMiddleware({
    'serializableCheck': {
      'ignoredActions': [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)
