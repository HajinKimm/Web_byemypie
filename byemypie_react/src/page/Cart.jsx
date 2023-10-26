import React from 'react';

const Cart = () => {
    return (
        <div>
            <div className="inner">
                <h2>CART</h2>
                <div className='cartQuantity'>
                    <span>국내배송상품({})</span>
                    <span>해외배송상품({})</span>
                </div>
                <div className='cart'>
                    <table>
                        <colgroup>
                            <col />
                        </colgroup>
                        <tr></tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;