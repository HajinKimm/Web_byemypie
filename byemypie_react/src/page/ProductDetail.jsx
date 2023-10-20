import React from 'react';
import { useParams } from 'react-router-dom';
import productList from '../assets/api/products.json'

const ProductDetail = () => {
    // const {productID} = useParams()
    console.log(1)
    // console.log(productID)
    return (
        <div>
            <h2>
                상품설명

            </h2>
        </div>
    );
};

export default ProductDetail;
{/* {
    productList.find(i=>i.id===productID).map(i=>
        <div>
            {i.mainImg}
        </div>
        )
} */}