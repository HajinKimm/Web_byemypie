import React, { useState } from 'react';
import GlobalStyle from './styled/GlobalStyle';
import { HashRouter, BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Layout from './page/Layout';
import Home from './page/Home';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Join from './page/Join';



const App = () => {
  return (
    <>
    <GlobalStyle/>
     <HashRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>

            <Route path='/category/Phone-case' element={<Products/>} />
            <Route path='/category/finger-tok' element={<Products/>} />
            <Route path='/category/airpods-case' element={<Products/>} />
            <Route path='/category/keyring' element={<Products/>} />
            <Route path='/category/etc' element={<Products/>} />
            <Route path='/category/products/:productID' element={<ProductDetail/>}/>

            <Route path='/login' element={<Login/>} />
            <Route path='/join' element={<Join/>} />
          </Route>
        </Routes>
      </HashRouter> 
    </>
  );
};

export default App;