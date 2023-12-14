import { createSlice } from "@reduxjs/toolkit";

type modaldata ={
    movieinfo:any,
    addlist:any,
    modalinfo:boolean
}

const initialState :modaldata = {
    movieinfo:{},
    addlist:[],
    modalinfo:false
}

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        addMovie:(state,action)=>{
            state.movieinfo = action.payload;
            state.modalinfo= true;
        },
        removeModal:(state,action)=>{
            state.movieinfo ={};
            state.modalinfo=false;
        },
        addtoList:(state,action)=>{
            state.addlist.push(action.payload);
        },
        removetoList:(state,action)=>{
            state.addlist = state.addlist.filter((list:any) => list.id !== action.payload.id);
        }
    }
})

export const { addMovie,removeModal,addtoList ,removetoList} = movieSlice.actions;
export default movieSlice.reducer;





