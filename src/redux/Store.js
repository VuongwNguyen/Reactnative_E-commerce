import { configureStore, combineReducers } from "@reduxjs/toolkit";

import AccountReducer from "./AccountSlice";
import ProductReducer from "./ProductSlice";
import CategoryReducer from "./CategorySlice";


const rootReducer = combineReducers({
    account: AccountReducer,
    product: ProductReducer,
    category: CategoryReducer,
});

const Store = configureStore({
    reducer: rootReducer,
});

export default Store;
