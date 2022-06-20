//to create slice
import {createAsyncThunk, createSlice,} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState={ 
    Documents:[],
    addStatuse:"",
    status:"idle",
    error:null,
}
const GET_URL='http://localhost:8080/document/getall';
const POST_URL='http://localhost:8080/document/add';

//to get all post
export const fetchDocuments=createAsyncThunk('documents/getdocuments',async()=>{
    try{
        const response=await axios.get(GET_URL);
    return response;
    }
    catch(err){
        console.log(err);
    }
})


//to add post 
export const documentAdd=createAsyncThunk("documents/adddocuments",async(documentdata,{rejectWithValue})=>{
      try{
       const response=await axios.post(POST_URL,documentdata)
       console.log(response.data);
        return response.data
      }catch(err){
          console.log(err);
         return rejectWithValue(err.response.data);
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
            state.Documents=action.payload.data
         
        })
        .addCase(fetchDocuments.rejected,(state,action)=>{
            state.status="failed"
            
        })
        .addCase(documentAdd.pending,(state,action)=>{
            state.addStatuse="Pending"
        })
        .addCase(documentAdd.fulfilled,(state,action)=>{
            state.addStatuse="Succses"
            state.Documents=action.payload  //check that
        })
        .addCase(documentAdd.rejected,(state,action)=>{
            state.addStatuse="Regected"
        })
    },
})
export const getDocumentStatus=(state)=>state.documents.status;
export const {addDocument} = documentSlice.actions;
export default documentSlice.reducer;