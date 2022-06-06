//to create slice
import {createAsyncThunk, createSlice,} from '@reduxjs/toolkit';
import axios from 'axios';

import {documentData} from '../FakeData/documentFakedata'

const initialState={ 
    Documents:documentData,
    status:"idle",
    error:null,
}
const GET_URL='http://localhost:8080/api/document/getallDocuments';
const POST_URL='http://localhost:8080/api/document/addDocuments';
export const fetchDocuments=createAsyncThunk('documents/getdocuments',async()=>{
    try{
        const response=await axios.get(GET_URL);
    return response;
    }
    catch(err){
        console.log(err);
    }
})




export const documentSlice=createSlice({
    name:"documents",
    initialState:initialState,
    reducers : {
        addDocument:(state,action)=>{
             //state is accessing current value of the state
             //data pass through action object
             //this code for adding a document
             state.value.push(action.payload);

        }, 
    },
    extraReducers(builder){
        builder
        .addCase(fetchDocuments.pending,(state,action)=>{
            state.status="pending"
        })
        .addCase(fetchDocuments.fulfilled,(state,action)=>{
            state.status="Success";
            state.Documents=action.payload.data;
         
        })
        .addCase(fetchDocuments.rejected,(state,action)=>{
            state.status="failed"
            
        })
    }
})
 

export const getDocumentStatus=(state)=>state.documents.status;


export const {addDocument} = documentSlice.actions;
export default documentSlice.reducer;