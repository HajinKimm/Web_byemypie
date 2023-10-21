import React from 'react';
import { FooterWrap } from '../../styled/HomeStyle';

const Footer = () => {
    return (
        <FooterWrap>
            <div className='kr inner'>
                <div><strong>byemypie</strong></div>
                <div>
                    <p className='mb20'>대표자 : 김자영</p>
                    <p>03979<br/>1층 서울 마포구 성미산로29길 35-14<br/>Business Number : 2580101319<br/>Permit Number : 2022-서울마포-2553</p>
                </div>
                <div>
                    <p className='mb20'>01083812820<br/>발신전용번호, 콜센터X<br/>불량접수 카카오 채널톡 접수</p>
                    <p>기업은행 682-009717-01-019<br/>Mon - Sun 11 - 6pm </p>
                </div>
                <div>
                    <p>Instagram</p>
                    <p>불량접수   이용약관   개인정보 처리방침</p>
                    <p>Copyright © byemypie. All rights reserved.</p>
                </div>
            </div>
            {/* <div className="eng inner">
                <div><strong>byemypie</strong></div>
                <div>
                    <p className='mb'>Ceo : Kim Jayeong</p>
                    <p>17550<br/>108, 1F, 43, Deokbongseowon-ro, Gongdo-eup,<br/>Anseong-si, Gyeonggi-do, Republic of Korea<br/>Business Number : 2580101319<br/>Permit Number : 2019-경기안성-0365</p>
                </div>
                <div>
                    <p>010-8381-2820<br/>(does not operate)</p>
                    <p>IBK 215-089789-01-013<br/>Mon - Fri : 1pm - 7pm <br/>Sat-Sun, Holyday OFF</p>
                </div>
                <div>
                    <p>Instagram  <br/>Kakao ID Search : bymypie_cs</p>
                    <p>Exchange/Return   Agreement   Privacy</p>
                    <p>Copyright © byemypie. All rights reserved.</p>
                </div>
            </div> */}
        </FooterWrap>
    );
};

export default Footer;