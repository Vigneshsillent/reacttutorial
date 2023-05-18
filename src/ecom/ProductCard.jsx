import React, { Fragment } from 'react'

const ProductCard = (props) => {
    console.log(props);
    
    const addToCart = (data) => {
        console.log('clicked')
        let productData = props.cartData;
        productData.push(data);
        props.setCartCount(productData.length);
        props.setCartData(productData)
        console.log(productData)
     
    }

    return (
        <Fragment>
            {
                props.products && props.products.map((item, i) => (

                    <div className="col-lg-3 col-sm-6" key={i}>
                        <div className="product_box">
                            <h4 className="bursh_text">{item.title}</h4>
                            <p className="lorem_text">{item.description}</p>
                            <img src={item.thumbnail} className="image_1" />
                            <div className="btn_main">
                                <div className="buy_bt">
                                    <ul>
                                        <li>
                                            <button type='button' onClick={() => addToCart(item)}> Buy Now</button>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="price_text">Price ₹{item.price}</h3>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
    )
}

export default ProductCard