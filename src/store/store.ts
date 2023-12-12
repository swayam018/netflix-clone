"use client"
import { configureStore } from '@reduxjs/toolkit'
import planReducer from './reducer/planSlice'
import subReducer from './reducer/subSlice'
//import { combineReducers } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    plan: planReducer,
    subs: subReducer
  },
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch