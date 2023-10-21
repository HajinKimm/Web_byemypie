import React, { useEffect } from 'react';
import Visual from './../components/main/Visual';
import MainProducts from '../components/main/MainProducts';
import { useSelector } from 'react-redux';

const Home = () => {
    const {productList} = useSelector(state=>state.productsR)

    useEffect(()=>{
        productList
    },[])
    return (
        <div>
            <Visual/>
            <MainProducts/>
        </div>
    );
};

export default Home;