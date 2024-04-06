import { createSlice } from "@reduxjs/toolkit";
import { APIGetProducts, APIGetProductByCategory, APICategoryWithProducts } from "../api/ProductsAPI";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        product: {},
        productsWithCategory: []
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(APIGetProducts.pending, (state, action) => {
            state.products = action.payload;
        })
        builder.addCase(APIGetProducts.fulfilled, (state, action) => {
            state.products = action.payload?.products;
        })
        builder.addCase(APIGetProducts.rejected, (state, action) => {
            state.products = action.payload;
        })

        builder.addCase(APIGetProductByCategory.pending, (state, action) => {
            state.products = action.payload;
        })
        builder.addCase(APIGetProductByCategory.fulfilled, (state, action) => {
            state.products = action.payload.products;
        })
        builder.addCase(APIGetProductByCategory.rejected, (state, action) => {
            state.products = action.payload;
        })

        builder.addCase(APICategoryWithProducts.pending, (state, action) => {
            state.productsWithCategory = action.payload;
        })
        builder.addCase(APICategoryWithProducts.fulfilled, (state, action) => {
            state.productsWithCategory = action.payload?.products;
        })
        builder.addCase(APICategoryWithProducts.rejected, (state, action) => {
            state.productsWithCategory = action.payload;
        })


    }

});
export const { setProduct } = productSlice.actions;
export default productSlice.reducer;