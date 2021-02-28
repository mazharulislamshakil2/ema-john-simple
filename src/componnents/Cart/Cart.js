import React from 'react';
import Product from '../Prouct/Product';

const Cart = (props) => {
    const cart = props.cart;

     let total = 0;
     for (let i = 0; i < cart.length; i++) {
         const product = cart[i];
         total = total + product.price;
     }
     let shipping = 0;
     if (total > 35) {
         shipping = 0;
     }
     if (total > 15) {
         shipping = 4.99;
     }
     else if(total > 0){
         shipping = 12.99
     };
     const tax = (total / 10 ).toFixed(2); 
     const grandTotal =(total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h1> chart summary </h1>
            <p> Items orders : {cart.length}</p>
            <p>Product Price : {total}</p>
            <p> <small> Shipping Cost :{shipping} </small></p>
            <p><small> tax + vat total :{tax}</small></p>
            <p> Total Price : {grandTotal}</p>
            
        </div>
    );
};

export default Cart;