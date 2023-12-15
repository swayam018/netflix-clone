import { createSlice } from "@reduxjs/toolkit/react";

interface subscribe{
    userData:any
}

const initialState: subscribe = {
    userData:{}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            state.userData= action.payload
        }
    }
})

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;