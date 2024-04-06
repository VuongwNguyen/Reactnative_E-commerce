import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helper/AxiosInstance";

export const APIGetProducts = createAsyncThunk("products/get", async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().get(`product/getProductByCondition`)
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const APIGetProductByCategory = createAsyncThunk("product/getByCategory", async (data='', { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().get(`product/getProductByCondition/?category_id=${data}`)
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});


export const APICategoryWithProducts = createAsyncThunk("product/categoryWithProducts", async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().get(`product/getProductWithCategory`)
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});


