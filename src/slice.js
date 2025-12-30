
import {createSlice} from "@reduxjs/toolkit"

const initialState={
 count:0,
 data:[],
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            const item=state.data.find((item)=>item.id===action.payload)
            if(item){
                item.quantity+=1;
            }
           
        },
        decrement:(state,action)=>{
                 const item=state.data.find((item)=>item.id===action.payload)
                 if(item && item.quantity>1){
                    item.quantity-=1;
                 }
        },

        addData:(state,action)=>{
            const item=state.data.find((item)=>item.id===action.payload.id);
            if(item) item.quantity+=1;
            else state.data.push({... action.payload,quantity:1})
        },

        handledelete:(state,action)=>{

           state.data= state.data.filter((item=>item.id!==action.payload))

           
        }

     

        
    }
});

export const {increment,decrement,addData,handledelete}=counterSlice.actions;
export default counterSlice.reducer;
