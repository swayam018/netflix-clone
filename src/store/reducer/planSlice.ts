"use client"
import { createSlice } from '@reduxjs/toolkit'

interface plan {
    price: number,
    mail: string,
    user:boolean
}

const initialState : plan = {
    price: 149,
    mail:"",
    user:false
}

export const planSlice:any = createSlice({
    name: "plan",
    initialState,
    reducers: {
        selectPrice: (state, action) => {
            state.price=action.payload
        },
        signupMail: (state, action) => {
           state.mail=action.payload 
        },
        settingUser:(state,action)=>{
            state.user = true
        },
        loggingUser:(state,action)=>{
            state.user = false;
            state.price=0
            state.mail=""
        }
    }
});

export const { selectPrice,signupMail,settingUser,loggingUser} = planSlice.actions;
export default planSlice.reducer;