import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from '../../styled/HomeStyle';
import { useDispatch } from "react-redux";
import { onCurrentPage, onMenufilter, onSortProductReset } from '../../store/modules/ProductSlice';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import SearchPopup from './SearchPopup';

const Header = () => {
    const [onPopup, setOnPopup] = useState(false)
    const dispatch = useDispatch()

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
        })
        dispatch(onCurrentPage(1))
    }

    const menuOnClick = (x) => {
        dispatch(onMenufilter(x))
        dispatch(onSortProductReset())
        scrollTop()
    }
    const onScrollBtn = (x) => {
        window.scrollTo({
            behavior: 'smooth',
            top: x
        })
    }
    return (
        <HeaderWrap>
            <div className="topMenu">
                <h1 onClick={() => scrollTop()}><Link to={'/'}><img src="https://en.byemypie.kr/web/upload/category/editor/2022/07/22/f64163cbbedc6747890be7cb3c6cd18b.png" alt="logo" /></Link></h1>
                <nav className='gnb'>
                    <ul>
                        <li><Link to='/category/Phone-case' onClick={() => menuOnClick('case')}>phone case</Link></li>
                        <li><Link to='/category/finger-tok' onClick={() => menuOnClick('tok')} >finger tok</Link></li>
                        <li><Link to='/category/airpods-case' onClick={() => menuOnClick('airpods')}>airpods case</Link></li>
                        <li><Link to='/category/keyring' onClick={() => menuOnClick('keyring')}>keyring</Link></li>
                        <li><Link to='/category/etc' onClick={() => menuOnClick('etc')}>etc</Link></li>
                    </ul>
                </nav>
            </div>
            <ul className='rightMenu'>
                <li><Link to="/login">LOGIN</Link></li>
                <li><Link to="/join">JOIN</Link></li>
                <li><Link to="/">CART</Link></li>
                <li><Link to="/">ORDER</Link></li>
                <li><Link to="/">MY PAGE</Link></li>
                <li><Link to="" onClick={()=>{setOnPopup(true)}}>SEARCH</Link></li>
                <li><Link to="/">KR / ENG</Link></li>
            </ul>
            <div className='scrollBtn'>
                <button className='up' onClick={() => onScrollBtn(0)}><AiOutlineArrowUp /></button>
                <button className='down' onClick={() => onScrollBtn(document.body.scrollHeight)}><AiOutlineArrowDown /></button>
            </div>

            {/* search Popup */}
            {
                onPopup && <SearchPopup setOnPopup={setOnPopup}/>
            }
        </HeaderWrap>
    );
};

export default Header;

