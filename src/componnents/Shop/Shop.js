import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Prouct/Product';
import './Shop.css';

const Shop = () => {
    const fast10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(fast10);
    const [cart , setCart ] = useState([]);

    const handelAddProduct = (product) =>{
        console.log('product click' , product);
        const newChart = [...cart , product];
        setCart(newChart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(pd => <Product
                        handelAddProduct ={handelAddProduct}
                        product={pd}></Product>  )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;