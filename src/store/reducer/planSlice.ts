"use client"
import { createSlice } from '@reduxjs/toolkit'

interface plan {
    price:number
}

const initialState : plan = {
    price:149
}

export const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        selectPrice: (state, action) => {
            state.price=action.payload
        }
    }
});

export const { selectPrice } = planSlice.actions;
export default planSlice.reducer;