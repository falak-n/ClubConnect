import { createSlice } from "@reduxjs/toolkit";


const clubSlice=createSlice({
    name:"club",
    initialState:{
        singleClub:null,
    },
    reducers:{

        setSingleClub:(state,action)=>{
            state.singleClub=action.payload;
        }
    }
});
export const {setSingleClub}=clubSlice.actions;
export default clubSlice.reducer;