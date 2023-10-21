import React from 'react';
import { useParams } from 'react-router-dom';
import productList from '../assets/api/products.json'

const ProductDetail = () => {
    const {productID} = useParams()
    console.log(1)
    console.log(productID)
    return (
        <div>
            <h2>
                상품설명
            {
                productList.filter(i=>i.id===Number(productID)).map(i=>
                    <div>
                        <img src={i.mainImg} alt="" />
                    </div>
                    )
            }

            </h2>
        </div>
    );
};

export default ProductDetail;