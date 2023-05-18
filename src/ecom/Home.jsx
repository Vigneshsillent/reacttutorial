import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header';
import Banner from './Banner';
import ProductList from './ProductList';
import './product.css';

const Home = () => {
    const [cartData, setCartData] = useState([]); //
    const [cartCount, setCartCount] = useState(localStorage.getItem('cart_count') || 0);

    useEffect(() => {
        console.log('ecoun is changesd');
        let cart_count = localStorage.setItem('cart_count', cartCount);
    }, [cartCount])
    
   
    console.log(cartData, 'cart data');
    
    return (
        <Fragment>
            <Header cartData={cartData} cartCount={cartCount} />
            <Banner />
            <ProductList setCartData={setCartData} cartData={cartData} setCartCount={setCartCount} />

        </Fragment>
    )
}

export default Home