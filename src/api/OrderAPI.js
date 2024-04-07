import { createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../helper/AxiosInstance';

export const APIGetOrder = createAsyncThunk('order/getOrder', async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().get(`user/getOrderUser?id=${data}`);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const APICreateOrder = createAsyncThunk('order/createOrder', async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().post('user/insertOrder', data);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
