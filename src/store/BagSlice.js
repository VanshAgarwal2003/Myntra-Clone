import { createSlice } from "@reduxjs/toolkit";


const BagSlice=createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
       addToBag:(state,action)=>{
           if(!state.includes(action.payload))
           {
              state.push(action.payload);
           }
       },
       deleteFromBag:(state,action)=>{
           return state.filter((value)=> value !== action.payload)    
       }
    }
})

export default BagSlice;

export const BagAction=BagSlice.actions;