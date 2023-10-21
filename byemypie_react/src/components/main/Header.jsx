import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from '../../styled/HomeStyle';
import { useDispatch } from "react-redux";
import { onMenufilter } from '../../store/modules/ProductSlice';
// 위, 아래로 스크롤 버튼 구현하기
const Header = () => {
    const dispatch = useDispatch()

    
    return (
        <HeaderWrap>
            <div className="topMenu">
                <h1><Link to={'/'}><img src="https://en.byemypie.kr/web/upload/category/editor/2022/07/22/f64163cbbedc6747890be7cb3c6cd18b.png" alt="logo" /></Link></h1>
                <nav className='gnb'>
                    <ul>
                        <li><Link to='/products' onClick={()=>dispatch(onMenufilter('case'))}>phone case</Link></li>
                        <li>
                            <Link to='/products' onClick={()=>dispatch(onMenufilter('tok'))} >finger tok</Link>
                        </li>
                        <li>
                            <Link to='/products' onClick={()=>dispatch(onMenufilter('airpods'))}>airpods case</Link>
                        </li>
                        <li>
                            <Link to='/products' onClick={()=>dispatch(onMenufilter('keyring'))}>keyring</Link>
                        </li>
                        <li>
                            <Link to='/products' onClick={()=>dispatch(onMenufilter('etc'))}>etc</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <ul className='rightMenu'>
                <li>
                    <Link to="/">LOGIN</Link>
                </li>
                <li>
                    <Link to="/">JOIN</Link>
                </li>
                <li>
                    <Link to="/">CART</Link>
                </li>
                <li>
                    <Link to="/">ORDER</Link>
                </li>
                <li>
                    <Link to="/">MY PAGE</Link>
                </li>
                <li>
                    <Link to="/">SEARCH</Link>
                </li>
                <li>
                    <Link to="/">KR / ENG</Link>
                </li>
            </ul>
            {/* <div className='headerHeight'></div> */}
        </HeaderWrap>
    );
};

export default Header;

