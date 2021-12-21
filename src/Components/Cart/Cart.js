import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name, price, tax_value, discount } = props.products;
    // const tax = parseInt(tax_value)
    const itemsPrice = props.qty * Number(price);
    const taxPrice = itemsPrice * Number(tax_value) / 100;
    const discountPrice = itemsPrice * Number(discount) / 100;
    const totalPrice = (itemsPrice + taxPrice) - discountPrice;
    return (
        <div className='shadow-lg mx-2 p-3'>
            <h4>My Cart</h4>
            <div className='row'>
                <div className='col-6'>{name}</div>
                <div className='col-6 text-end'>{props.qty} x ${price}</div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-6'>Items Price</div>
                <div className='col-6 text-end'>{itemsPrice}</div>
            </div>
            <div className='row'>
                <div className='col-6'>Tax Price</div>
                <div className='col-6 text-end'>{taxPrice}</div>
            </div>
            <div className='row'>
                <div className='col-6'>Discount Price</div>
                <div className='col-6 text-end'>{discountPrice}</div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-6'>Total Price</div>
                <div className='col-6 text-end'>{totalPrice}</div>
            </div>
            <div className='text-center mt-4'>
                <button onClick={() => props.handleAddToCart()} type="button" className="btn btn-dark">Place Order</button>
            </div>
        </div>
    );
};

export default Cart;