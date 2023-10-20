import React from 'react';
import GlobalStyle from './styled/GlobalStyle';
import { HashRouter, BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Layout from './page/Layout';
import Home from './page/Home';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';
const App = () => {
  return (
    <>
    <GlobalStyle/>
     <HashRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>

            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:productID' element={<ProductDetail/>}/>
          </Route>
        </Routes>
      </HashRouter> 
    </>
  );
};

export default App;