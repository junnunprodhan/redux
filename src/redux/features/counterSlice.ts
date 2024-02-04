import { createSlice } from "@reduxjs/toolkit";
const initialState = {count : 0}
const counterSlice =createSlice({
    name:'conter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count = state.count + 1
        },
        incrementByValue:(state,actions)=>{
            state.count = state.count + actions.payload
        },
        decrement:(state)=>{
            state.count = state.count -1
        },
        decrementByValue:(state,actions)=>{
            state.count = state.count - actions.payload
        }
    }
})
export const {increment,decrement,incrementByValue,decrementByValue} = counterSlice.actions;
export default counterSlice.reducer;