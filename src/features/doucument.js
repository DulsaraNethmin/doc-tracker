//to create slice
import {createSlice} from '@reduxjs/toolkit';
import {documentData} from '../FakeData/documentFakedata'

export const documentSlice=createSlice({
    name:"documents",
    initialState: {value: documentData},
    reducers : {
        addDocument:(state,action)=>{
             //state is accessing current value of the state
             //data pass through action object
             //this code for adding a document


        }  
    }
})

export default documentSlice.reducer;