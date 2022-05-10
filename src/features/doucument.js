//to create slice
import {createSlice} from '@reduxjs/toolkit';

export const documentSlice=createSlice({
    name:"document",
    initialState: {value:{
        uuid:0,
        doc_name: "",
        type:"",
        date:"2022-01-01", 
    }},
    reducers : {
        document : (state,action)=>{
              state.value=action.payload;
        }

    }
})

export default documentSlice.reducer;