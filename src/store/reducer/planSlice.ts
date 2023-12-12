"use client"
import { createSlice } from '@reduxjs/toolkit'

interface plan {
    price: number,
    mail: string
}

const initialState : plan = {
    price: 149,
    mail:""
}

export const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        selectPrice: (state, action) => {
            state.price=action.payload
        },
        signupMail: (state, action) => {
           state.mail=action.payload 
        }
    }
});

export const { selectPrice,signupMail } = planSlice.actions;
export default planSlice.reducer;