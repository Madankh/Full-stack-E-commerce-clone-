import { createSlice } from "@reduxjs/toolkit";

const RegisteruserRedux = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers:{
        RegisterStart: (state) => {
            state.isFetching = true
        },
        RegisterSuccess:(state , action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
        },
        RegisterFailure:(state)=>{
            state.isFetching = false;
            state.error = true
        },
    },
});


export const {RegisterStart , RegisterSuccess , RegisterFailure} = RegisteruserRedux.actions;
export default RegisteruserRedux.reducer