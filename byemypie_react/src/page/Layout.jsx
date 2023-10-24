import React from 'react';
import Header from '../components/main/Header';
import Footer from '../components/main/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={{width:'100%', minWidth:'1920px'}}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;