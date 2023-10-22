import styled from 'styled-components'
import { colorNavy } from './HomeStyle'

export const LoginWrap = styled.div`
    .inner{
        padding: 240px 0px 50px;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items:center;
        h2{
            font-size: 24px;
            color: ${colorNavy};
            font-weight: 600;
            font-style: italic;
            margin-bottom: 30px;
        }
        .loginForm{
            input{
                box-sizing: border-box;
                &.userinput{
                    display: block;
                    width: 300px;
                    height: 40px;
                    border-radius: 30px;
                    margin-bottom: 8px;
                    text-indent: 15px;
                    border: 1px solid #999;
                    &::placeholder{
                        color: #333;
                        font-size: 11px;
                    }
                    &:focus{
                        outline:1.5px solid ${colorNavy};
                    }
                }
            }
            .check{
                display: flex;
                justify-content: space-between;
                font-size: 10px;
                margin-bottom: 5px;
                input{
                    vertical-align: middle;
                }
            }
            .forgot{
                font-size: 12px;
                margin-bottom: 20px;
                margin-left: 5px;
                a{
                    margin-right: 20px;
                }
            }
            .submitBtn{
                display: block;
                width: 300px;
                height: 60px;
                border-radius: 30px;
                border: 1px solid ${colorNavy};
                background: ${colorNavy};
                color: #fff;
                margin-bottom: 7px;
                font-size: 24px;
                font-weight: 600;
                font-style: italic;
                transition: 0.5s;
                &:hover{
                    border: 1px solid ${colorNavy};
                    background: #fff;
                    color:  ${colorNavy};
                    
                }
            }
            .registerBtn{
                display: block;
                width: 300px;
                height: 40px;
                border-radius: 30px;
                border: 1px solid ${colorNavy};
                background: #fff;
                transition: 0.5s;
                a{
                    font-size: 20px;
                    font-weight: 500;
                    font-style: italic;
                    color: ${colorNavy};
                    transition: 0.5s;
                }
                &:hover{
                    background: ${colorNavy};
                    a{
                        color: #fff;
                    }
                }
            }
        }
    }   
`