import {configureStore} from '@reduxjs/toolkit';
import productsR from './modules/ProductSlice';

export const store = configureStore({
    reducer:{
        productsR,
    }
})