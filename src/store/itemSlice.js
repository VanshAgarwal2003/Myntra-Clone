import { createSlice } from "@reduxjs/toolkit";
import items from "./itemData";

const itemSlice=createSlice({
    name:'items',
    initialState: items,
    reducers:{
        addItems: (store,action)=>{
           return store;
        }
    }
})

export default itemSlice;
export const itemsAction=itemSlice.actions;
