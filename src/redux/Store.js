import { configureStore, combineReducers } from "@reduxjs/toolkit";

import AccountReducer from "./AccountSlice";
import ProductReducer from "./ProductSlice";
import CategoryReducer from "./CategorySlice";
import OrderReducer from "./OrderSlice";


const rootReducer = combineReducers({
    account: AccountReducer,
    product: ProductReducer,
    order: OrderReducer,
    category: CategoryReducer,
});

const Store = configureStore({
    reducer: rootReducer,
});

export default Store;
