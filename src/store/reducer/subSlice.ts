import { createSlice } from "@reduxjs/toolkit/react";

interface subscribe{
    subs:boolean
}

const initialState: subscribe = {
    subs:false
}

export const subSlice = createSlice({
    name: 'subscribe',
    initialState,
    reducers: {
        isSubscribed: (state, action) => {
            console.log("reducer called");
            state.subs= true
        }
    }
})

export const { isSubscribed } = subSlice.actions;
export default subSlice.reducer;