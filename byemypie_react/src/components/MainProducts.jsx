// 상품 데이터
//     {
//     "id":0, "title":"", "price":0, "sale":0, "issue":"", "category":"","menuType":"","review": 0,
//     "mainImg":"",
//     "descImg":
//         [""]
// }

import React from 'react';
import productList from '../assets/api/products.json'
import { MainProductsWrap } from '../styled/HomeStyle';
import { Link } from 'react-router-dom';


const MainProducts = () => {
    return (
        <MainProductsWrap>
            <div className="inner">
                {
                    productList.map(i =>
                        <div key={i.id} className='mainItem'>
                            <Link to={`/category/products/${i.id}`}>
                                <div className='mainImg'>
                                    <img src={i.mainImg} alt="" />
                                </div>
                            </Link>
                            <div className="text">
                                <Link to={`/category/products/${i.id}`}>
                                    <h4>{i.title}</h4>
                                </Link>
                                <span>{i.category}</span>
                                <strong className={i.sale===0?'':'line'}>krw {i.price.toLocaleString()}</strong>
                                {
                                    i.sale !== 0 &&
                                    <strong>krw {i.sale.toLocaleString()}</strong>
                                }
                                <i className={i.issue==='NEW'?'issue issueNew':i.issue==='BEST'?'issue':''}>{i.issue}</i>
                            </div>

                        </div>

                    )
                }
            </div>
        </MainProductsWrap>
    );
};

export default MainProducts;