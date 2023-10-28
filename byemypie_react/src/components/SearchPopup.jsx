import React, { useState } from 'react';
import {BiSearch} from 'react-icons/bi'
import { SearchPopupWrap } from '../styled/HomeStyle';
import { useDispatch } from 'react-redux';
import { onCurrentPage, onSearchData } from '../store/modules/ProductSlice';
import { useNavigate } from 'react-router-dom';

const SearchPopup = ({setOnPopup}) => {
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault()
        dispatch(onSearchData(text))
        dispatch(onCurrentPage(1))
        setOnPopup(false)
        navigate('/search/products')
    }
    return (
        <SearchPopupWrap>
            <div className="bg" onClick={()=>setOnPopup(false)}></div>
            <div className='box'>
                <h2>Search Product</h2>
                <form  onSubmit={onSubmit}>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button type='submit'><BiSearch/></button>
                </form>
            </div>
        </SearchPopupWrap>
    );
};

export default SearchPopup;