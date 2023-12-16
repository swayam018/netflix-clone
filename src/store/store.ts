"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import planReducer from './reducer/planSlice'
import subReducer from './reducer/subSlice'
import movieReducer from './reducer/movieSlice'
import userReducer from './reducer/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
  key: 'anything',
  storage,
}

const rootReducer = combineReducers( {
  plan: planReducer,
  subs: subReducer,
  movie: movieReducer,
  user:userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:persistedReducer,
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch