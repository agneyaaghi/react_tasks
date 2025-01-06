import { createSlice } from "@reduxjs/toolkit";
// import { data } from "react-router-dom";

const initialState={
             count:0,
             data:[]
};
export const counterSlice= createSlice({
                    name:"counter",
                    initialState,
                    reducers:{
                      increment:(state)=>{
                                state.count+=1
                    },
                      decrement:(state)=>{
                               state.count-=1         
                    },
                    addingdata:(state,action)=>{
                      const item=state.data.find((item)=>item.id===action.payload.id);
                      if(item){
                              item.quantity+=1;
                      }else{
                        state.data.push({...action.payload,quantity:1});
                      }
                      }
           }   
   });
export const {increment,decrement,addingdata}=counterSlice.actions;
export default counterSlice.reducer