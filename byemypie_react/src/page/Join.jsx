import React from 'react';
import { useSelector } from 'react-redux';
import { JoinWrap } from '../styled/SideStyle';

const Join = () => {
    const {termsData} = useSelector(state=>state.userR)
    console.log(termsData)
    const onSubmit=e=>{
        e.preventDefault()
    }

    const changeCheckboxTerms=(e)=>{
        const {name, checked} = e.target
        if(name==='termsAll'){
            termsData.map(i=>i.category?{...i}:{...i, isChk:true})
        }else{
            termsData.map(i=>i.category===name?{...i, isChk:!checked}:{...i})
        }
    }
    return (
        <JoinWrap>
            <div className="inner">
                <h2>REGISTER</h2>
                <form onSubmit={onSubmit}>
                    <table className='userWrite'>
                        <colgroup>
                            <col className='w1' />
                            <col className='w2' />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td><label htmlFor='userID'>아이디<b>*</b></label></td>
                                <td>
                                    <input type="text" id='userID' className='w150'/>
                                    <span>(영문소문자/숫자, 4~16자)</span>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userPW">비밀번호<b>*</b></label> </td>
                                <td>
                                    <input type="password" id='userPW' className='w150'/>
                                    <span>(영문 대문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자)</span>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userPW2">비밀번호 확인<b>*</b></label> </td>
                                <td><input type="password" id='userPW2' className='w150'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userName">이름<b>*</b></label> </td>
                                <td><input type="text" id='userName' className='w150'/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userPhone">휴대전화<b>*</b></label> </td>
                                <td>
                                    <select name="" id="userPhone"  className='w60'>
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                        <option value="019">019</option>
                                    </select>
                                    <em>-</em>
                                    <input type="text" className='w60'/>
                                    <em>-</em>
                                    <input type="text"  className='w60'/>
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="userEmail">이메일<b>*</b></label> </td>
                                <td><input type="email" id='userEmail' className='w150'/></td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>전체동의</h4>
                    <table className='agreement'>
                        <colgroup>
                            <col  className='w3'/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td className='chkAll'>
                                    <input type="checkbox" name='termsAll' onChange={changeCheckboxTerms} checked={termsData.filter(i=>i.isChk===false).length < 1}/>
                                    <label htmlFor='termsAll'>이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</label>
                                </td>
                            </tr>
                            <tr>
                                <td className='chk1'>
                                    <label>{termsData[0].title}</label>
                                    <p>{termsData[0].desc}</p>
                                    <input type="checkbox" name={termsData[0].category} checked={termsData[0].isChk} />
                                </td>
                            </tr>
                            <tr>
                                <td className='chk2'>

                                </td>
                            </tr>
                            <tr>
                                <td className='chk3'>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </JoinWrap>
    );
};

export default Join;