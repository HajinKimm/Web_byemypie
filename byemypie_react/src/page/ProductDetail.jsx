import React from 'react';
import { useParams } from 'react-router-dom';
import productList from '../assets/api/products.json'
import { ProductDetailWrap } from '../styled/ProductDetail';

const ProductDetail = () => {
    const {productID} = useParams()
    const item = productList.filter(i=>i.id===Number(productID))[0]
    return (
        <ProductDetailWrap>
            <div className="inner">
                <div className="buyInfo">
                    <div className='imgBox'>
                        <div className='mainImg'><img src={item.mainImg} alt={item.title} /></div>
                        <div className='imgList'>
                            <div><img src={item.mainImg} alt={item.title} /></div>
                            <div><img src="" alt="" /></div>
                        </div>
                    </div>
                    <div className='info'>
                        
                    </div>
                </div>
                <div className='descImg'>
                    {
                        item.descImg.map((i,idx)=><div key={idx}>
                            <img src={i} alt="" />
                        </div>)
                    }
                </div>
            </div>
        </ProductDetailWrap>
    );
};

export default ProductDetail;