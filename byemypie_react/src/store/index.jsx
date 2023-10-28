import {configureStore} from '@reduxjs/toolkit';
import productsR from './modules/ProductSlice';
import userR from './modules/UserSlicr'


export const store = configureStore({
    reducer:{
        productsR,
        userR
    }
})