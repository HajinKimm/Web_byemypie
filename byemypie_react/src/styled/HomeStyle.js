import styled from 'styled-components'
export const colorNavy ='#3C5EA2'
export const colorBlue ='#2646EB'
export const colorGray ='#B6B2AE'

export const HeaderWrap = styled.header`
width: 100%;
.topMenu{
    position: fixed;
    width: 100%;
    height: 170px;
    top: 0;
    left: 0;
    transition: 0.4s ease-in;
    &:hover{
        background: rgba(255,255,255,0.6);
    }
    h1{
        position: fixed;
        top: 35px;
        left: 50%;
        transform: translateX(-50%);
    }
    .gnb{
        position: fixed;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
        ul{
            display: flex;
            li{
                margin-right: 35px;
                &:last-child{
                    margin-right: 0px;
                }
                a{
                    color: ${colorNavy};
                    font-weight: 500;
                }
            }
        }
    }
}
    .rightMenu{
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        li{
            text-align: right;
            a{
                color: ${colorNavy};
                font-size: 12px;
                font-weight: 500;
            }
        }
    }
`

export const FooterWrap = styled.header`

`