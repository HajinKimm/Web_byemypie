import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainProductsWrap } from '../styled/HomeStyle';
import {FaAnglesLeft, FaAngleLeft} from 'react-icons/fa6'
import {FaAngleDoubleRight,FaAngleRight} from 'react-icons/fa'
import { onCurrentPage, onSortProduct } from '../store/modules/ProductSlice';
import { Link } from 'react-router-dom';

const SearchProduct = () => {
    const {menufilter, productTitle, sort, pagingNumber } = useSelector(state => state.productsR);
    const dispatch = useDispatch();
    //paging
    const postPerPage = 9; //게시물수
    const pageAllNumber = Math.ceil(menufilter.length/postPerPage);//총페이지수
    const firstPost = (pagingNumber-1)*postPerPage;
    const lastPost = firstPost+postPerPage;
    const pageNum = [...Array(pageAllNumber).keys()].map(item=>item+1)
    const currentPosts = menufilter.slice(firstPost, lastPost)
    
    const ScrollTop = ()=>{
        window.scrollTo({
            top:0,
        })
    }
    return (
        <MainProductsWrap>
            <h2>{productTitle}</h2>
            <div className='productsMenu'>
                <span>등록제품 <b className='textBord'>{menufilter.length}</b>개</span>
                <ul className='sortList'>
                    {
                        sort.map(i=>
                            <li key={i.id} onClick={()=>dispatch(onSortProduct(i.eTitle))} className={i.isOn?'textBord':''}>{i.title}</li>
                        )
                    }
                </ul>
            </div>
            <div className="inner productsInner">
                {
                    currentPosts.map(i =>
                        <div key={i.id} className='mainItem'>
                            <Link to={`/category/products/${i.id}`}>
                                <div className='productsImg'>
                                    <img src={i.mainImg} alt={i.title} />
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
            <div className="paging">
                <i onClick={()=>{pagingNumber !== 1 && (dispatch(onCurrentPage(1)),ScrollTop())}}><FaAnglesLeft/></i>
                <i onClick={()=>{pagingNumber > 1 &&( dispatch(onCurrentPage(pagingNumber-1)),ScrollTop())}}><FaAngleLeft/></i>
                {
                    pageNum.map(i=><span key={i} onClick={()=>{dispatch(onCurrentPage(i)),ScrollTop()}} className={`${pagingNumber===i?'on':''}`}>{i}</span>)
                }
                <i onClick={()=>{pagingNumber < pageAllNumber && (dispatch(onCurrentPage(pagingNumber+1)),ScrollTop())}}><FaAngleRight/></i>
                <i onClick={()=>{pagingNumber !== pageAllNumber && (dispatch(onCurrentPage(pageAllNumber)),ScrollTop())}}><FaAngleDoubleRight/></i>
            </div>
        </MainProductsWrap>
    );
};

export default SearchProduct;