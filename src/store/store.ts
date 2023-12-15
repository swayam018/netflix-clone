"use client"
import { configureStore } from '@reduxjs/toolkit'
import planReducer from './reducer/planSlice'
import subReducer from './reducer/subSlice'
import movieReducer from './reducer/movieSlice'
//import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './reducer/userSlice'

export const store = configureStore({
  reducer: {
    plan: planReducer,
    subs: subReducer,
    movie: movieReducer,
    user:userReducer
  },
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch