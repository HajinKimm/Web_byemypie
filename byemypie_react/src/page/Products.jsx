import React from 'react';
import { MainProductsWrap } from '../styled/HomeStyle';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onSortProduct } from '../store/modules/ProductSlice';

const Products = () => {

    const {menufilter, productTitle, sort} = useSelector(state=>state.productsR)
    const dispatch = useDispatch()

    return (
        <MainProductsWrap>
            <h2>{productTitle}</h2>
            <div className='productsMenu'>
                <span>등록제품 {menufilter.length}개</span>
                <ul className='sortList'>
                    {
                        sort.map(i=>
                            <li key={i.id} onClick={()=>dispatch(onSortProduct(i.eTitle))}>{i.title}</li>
                        )
                    }
                </ul>
            </div>
            <div className="inner ">
                {
                    menufilter.map(i =>
                        <div key={i.id} className='mainItem'>
                            <Link to={`/products/${i.id}`}>
                                <div className='mainImg'>
                                    <img src={i.mainImg} alt="" />
                                </div>
                            </Link>
                            <div className="text">
                                <Link to={`/products/${i.id}`}>
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

export default Products;