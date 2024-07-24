import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'
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
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = configureStore({
    reducer: persistedReducer,
});


export default Store;
