import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from '../../styled/HomeStyle';

{/* header, menu
    오른쪽 menu, kakao
    fixed처리!!! */}


const Header = () => {
    return (
        <HeaderWrap>
            <div className="topMenu">
                <h1><img src="https://en.byemypie.kr/web/upload/category/editor/2022/07/22/f64163cbbedc6747890be7cb3c6cd18b.png" alt="" /></h1>
                <nav className='gnb'>
                    <ul>
                        <li><Link to='/'>phone case</Link></li>
                        <li>
                            <Link to="/">finger tok</Link>
                        </li>
                        <li>
                            <Link to="/">airpods case</Link>
                        </li>
                        <li>
                            <Link to="/">keyring</Link>
                        </li>
                        <li>
                            <Link to="/">etc</Link>
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
        </HeaderWrap>
    );
};

export default Header;

