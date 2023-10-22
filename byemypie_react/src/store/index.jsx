import {configureStore} from '@reduxjs/toolkit';
import productsR from './modules/ProductSlice';
import AthorityR from './modules/AthorityStyle';

export const store = configureStore({
    reducer:{
        productsR,
        AthorityR,
    }
})