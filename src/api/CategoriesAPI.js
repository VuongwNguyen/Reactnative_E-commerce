import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helper/AxiosInstance";


export const APIGetCategories = createAsyncThunk("categories/get", async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().get(`category/getAllCategory`);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});