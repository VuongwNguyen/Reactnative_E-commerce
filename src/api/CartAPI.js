import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helper/AxiosInstance";


export const postCart = createAsyncThunk('user/insertCart', async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance.post('user/insertCart', data);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})