//to create slice
import {createAsyncThunk, createSlice,} from '@reduxjs/toolkit';
import axios from 'axios';
import {documentData} from '../FakeData/documentFakedata'

const initialState={ 
    Documents:[],
    status:"idle",
    error:null
}

export const fetchDocuments=createAsyncThunk('documents/fetchDocuments',async(req,res)=>{
    try{
        const response=await axios.get('http://localhost:8080/api/document/getallDocuments');
        return[...response.data];
    }catch(err){
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
            state.status="Success"
             state.documents=action.payload
         
        })
        .addCase(fetchDocuments.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
})

export const selectALLDocument=(state)=>state.documents.document;
export const getDocumentStatus=(state)=>state.documents.status;


export const {addDocument} = documentSlice.actions;
export default documentSlice.reducer;