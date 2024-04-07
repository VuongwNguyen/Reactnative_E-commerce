import { createSlice } from '@reduxjs/toolkit';
import { APIGetOrder, APICreateOrder } from '../api/OrderAPI';

const OrderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        orderStatus: 'idle',
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(APIGetOrder.pending, (state, action) => {
            state.orders = action.payload;
            state.orderStatus = 'loading';
        });
        builder.addCase(APIGetOrder.fulfilled, (state, action) => {
            if (action.payload.status) {
                state.orders = action.payload?.orders;
                state.orderStatus = 'success';
            } else {
                state.orders = action.payload;
                state.orderStatus = 'fail';
            }
        });
        builder.addCase(APIGetOrder.rejected, (state, action) => {
            state.orders = action.payload;
            state.orderStatus = 'fail';
        });

        builder.addCase(APICreateOrder.pending, (state, action) => {
            state.orders = action.payload;
            state.orderStatus = 'loading';
        });
        builder.addCase(APICreateOrder.fulfilled, (state, action) => {
            if (action.payload.status) {
                state.orders = action.payload;
                state.orderStatus = 'success';
            } else {
                state.orders = action.payload;
                state.orderStatus = 'fail';
            }
        });
        builder.addCase(APICreateOrder.rejected, (state, action) => {
            state.orders = action.payload;
            state.orderStatus = 'fail';
        });
    },
});

export default OrderSlice.reducer;
