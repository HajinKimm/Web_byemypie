import styled from 'styled-components'
export const colorNavy ='#3C5EA2'
export const colorBlue ='#2646EB'
export const colorGray ='#B6B2AE'

export const HeaderWrap = styled.header`
width: 100%;
.topMenu{
    z-index: 100;
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
        z-index: 100;
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
    /* .headerHeight{
        width: 100%;
        height: 170px;
    } */
`

export const FooterWrap = styled.header`
   .inner{
    height: 240px;
        padding: 100px 0px 0px 14px;
        display: flex;
        font-size: 12px;
        box-sizing: border-box;
        div{
            &:nth-child(1){
                margin-right: 90px;
                font-size: 16px;
                font-weight: 600;
            }
            &:nth-child(2){
                margin-right: 150px;
            }
            &:nth-child(3){
                margin-right: 815px;
            }
            &:nth-child(4){
                p{
                    margin-bottom: 25px;
                }
            }
        }
        .mb20{
            margin-bottom: 20px;
        }
   } 
`

export const VisualWrap = styled.section`
position: relative;
.btn{
    height: 1080px;
    box-sizing: border-box;
    padding-top: 515px;
    padding-left: 50px;
    span{
        cursor: pointer;
        display: block;
        color: #bbb;
        font-weight: 700;
        font-size: 10px;
        margin-bottom: 10px;
        &.on{
            color: ${colorNavy};
        }
        &:hover{
            color: ${colorNavy};
        }
    }
}
.visual{
    z-index: -10;
    position: absolute;
    top: 0px;
    left: 0;
    /* left: -100px; */
    /* width: 100%; */
    img{
        width: 100%;
        transition: 0.8s;
        opacity: 0;
        &.on{
            opacity: 1;
        }
    }
}
`

export const MainProductsWrap = styled.section`
    //main page
    .inner{
        box-sizing: border-box;
        padding: 0px 360px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .mainItem{
            .mainImg{
                width: 586px;
                img{
                    width: 586px;
                }
            }
            .text{
                text-align: center;
                font-size: 11px;
                letter-spacing: 2px;
                a{
                    h4{
                    font-size: 12px;
                    font-weight: 700;
                        margin-bottom: 10px;
                    }
                }
                span{
                    text-transform: uppercase;
                    color: #555;
                    display: block;
                }
                strong{
                    text-transform: uppercase;
                    color: #333;
                    display: block;
                    &.line{
                        color: #999;
                        text-decoration: line-through;
                    }
                }
                i{
                    &.issue{
                        display: inline-block;
                        font-size: 10px;
                        font-weight: 500;
                        background: ${colorBlue};
                        padding: 2px 5px;
                        color: #fff;
                        border-radius: 2px;
                        margin-top: 3px;
                        &.issueNew{
                            background: ${colorGray};
                        }
                    }
                }
            }

        }
    }
    //not main page // products page
    h2{
        margin-top: 200px;
        text-align: center;
        color: ${colorNavy};
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .productsMenu{
        padding: 30px 145px 30px;
        color: #aaa;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        .sortList{
            display: flex;
            li{
                margin-left: 20px;
                cursor: pointer;
            }
        }
        .textBord{
            color: #999;
            font-weight: 600;
        }
    }
    .productsInner{
        padding: 0px 145px;
        .mainItem{
            .productsImg{
                width: 525px;
                img{
                    width: 525px;
                }
            }
        }
    }
`