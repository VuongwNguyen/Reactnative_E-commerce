import { createSlice } from "@reduxjs/toolkit";

import { APILogin,APIinsertCart } from "../api/UserAPI";


const AccountSlice = createSlice({
    name: "account",
    initialState: {
        account: null,
        accountStatus: 'idle',
    },
    reducers: {
        logOut: (state) => {
            state.account = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(APILogin.pending, (state, action) => {
            state.account = action.payload;
            state.accountStatus = 'loading';
        });
        builder.addCase(APILogin.fulfilled, (state, action) => {
            if (action.payload.status) {
                state.account = action.payload?.user;
                state.accountStatus = 'success';
            } else {
                state.account = action.payload;
                state.accountStatus = 'fail';
            }

        });
        builder.addCase(APILogin.rejected, (state, action) => {
            state.account = action.payload;
            state.accountStatus = 'fail';
        });
        // 
        builder.addCase(APIinsertCart.pending, (state, action) => {
            state.account = action.payload;
            state.accountStatus = 'loading';
        });
        builder.addCase(APIinsertCart.fulfilled, (state, action) => {
            if (action.payload.status) {
                state.account = action.payload?.user;
                console.log('>>>>>>>',state.account);
                state.accountStatus = 'success';
            } else {
                state.account = action.payload;
                state.accountStatus = 'fail';
            }
        });
        builder.addCase(APIinsertCart.rejected, (state, action) => {
            state.account = action.payload;
            state.accountStatus = 'fail';
        });

    }
});


export default AccountSlice.reducer;