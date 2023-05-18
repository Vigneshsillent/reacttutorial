import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

const ProductList = (props) => {
   
    const [products, setProducts] = useState([]);

    const fetchProduct = () => {
        console.log('fetching product');
        axios.get('https://dummyjson.com/products?limit=10&skip=10')
            .then((response) => {
                setProducts(response.data.products);
            })
    }

    useEffect(() => {     
        fetchProduct();
    }, [])


    return (
        <Fragment>
            <div className="product_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="product_taital">Our Products</h1>
                            <p className="product_text">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                    </div>
                    <div className="product_section_2 layout_padding">
                        <div className="row">
                            <ProductCard products={products} setCartData={props.setCartData} cartData={props.cartData} setCartCount={props.setCartCount} />
                        </div>

                        <div className="seemore_bt"><a href="#">See More</a></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductList