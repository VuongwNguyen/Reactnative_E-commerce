import { createSlice } from "@reduxjs/toolkit";
import { APIGetCategories } from "../api/CategoriesAPI";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        category: {},
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(APIGetCategories.pending, (state, action) => {
            state.categories = [];
        })
        builder.addCase(APIGetCategories.fulfilled, (state, action) => {
            state.categories = action.payload?.categories;
        })
        builder.addCase(APIGetCategories.rejected, (state, action) => {
            state.categories = [];
        })
    }

});
export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;