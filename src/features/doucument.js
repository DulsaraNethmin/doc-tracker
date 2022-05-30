//to create slice
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import {documentData} from '../FakeData/documentFakedata'
import axios from 'axios';
//to get data from db by using redux-thunk
const postURL="http://localhost:8080/Documents/Addposts";
const initialState={
    documents:[],
    status:"idle",
    error:null
}

export const documentSlice=createSlice({
    name:"documents",
    initialState: [],
    reducers : {
        addDocument:(state,action)=>{
             //state is accessing current value of the state
             //data pass through action object
             //this code for adding a document
             state.value.push(action.payload);

        }, 
    },
})
export const {addDocument} = documentSlice.actions;
export default documentSlice.reducer;