import { createAsyncThunk } from "@reduxjs/toolkit";
import  AxiosInstance  from "../helper/AxiosInstance";

export const APILogin = createAsyncThunk("user/login",async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().post(`user/login`, data);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const APIRegister = createAsyncThunk("user/register",async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().post(`user/register`, data);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const APIUpdateUser = createAsyncThunk("user/updateUser",async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().post(`user/update`, data);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const APIinsertCart = createAsyncThunk("user/cart",async (data, { rejectWithValue }) => {
    try {
        const response = await AxiosInstance().post(`user/insertCart`, data);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});








