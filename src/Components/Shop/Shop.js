import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        setLoading(true);
        const data = {
            store: 1,
            product_id: 1
        }
        fetch('https://dev.nazdik.in/api/product/show', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(details => {
                console.log(details.data);
                setProducts(details.data);
            })
            .finally(() => setLoading(false));
    }, [])


    const handleDecrement = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }
    const handleIncrement = () => {
        setQty(qty + 1);
    }

    const handleAddToCart = () => {
        alert('Order Place Successfully')
    }

    return (
        <div className='row container mx-auto mt-5 p-0'>
            {loading ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <>
                    <div className='col-8 p-0'>
                        <Product
                            handleDecrement={handleDecrement}
                            handleIncrement={handleIncrement}
                            qty={qty}
                            products={products}
                        ></Product>
                    </div>
                    <div className='col-4 p-0'>
                        <Cart qty={qty} handleAddToCart={handleAddToCart} products={products}></Cart>
                    </div>
                </>}
        </div>
    );
};

export default Shop;