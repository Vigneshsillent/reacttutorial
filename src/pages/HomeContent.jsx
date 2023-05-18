import React, { Fragment, useEffect, useState } from 'react'
import './product.css';

const HomeContent = () => {
    const [title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const [productData, setProductData] = useState([]);

    const changeTitle = () => {
        setTitle('Product List')
        console.log('running')
    }

    useEffect(() => {
       
        listProduct();
        console.log('effect is running');
        console.log(productData);
    }, [count])
    
    const listProduct = () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data,'data')
            setProductData(data)
        });
    }

    const addToCart = () => {
        let count_no = count;
        setCount(count_no+1);

    }

    return (
        <Fragment>
            <div className="listing-section">
                <div className='mt-3' style={{ marginTop: '33px'}}>
                    <h3>{title}</h3>
                </div>
                <br />
                <div>
                    <button style={{ width:'100px'}}  onClick={changeTitle} > Get Title </button>
                </div>
                <br />
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-1"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Orange</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious oranges!</p>
                        <label for="item-1-quantity">Quantity:</label>
                        <input type="text" name="item-1-quantity" id="item-1-quantity" value="1" />
                        <button type="button" name="item-1-button" id="item-1-button" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-2"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Apple</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious apples!</p>
                        <label for="item-2-quantity">Quantity:</label>
                        <input type="text" name="item-2-quantity" id="item-2-quantity" value="1" />
                        <button type="button" name="item-2-button" id="item-2-button" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                    <div className="image-box">
                        <div className="images" id="image-3"></div>
                    </div>
                    <div className="text-box">
                        <h2 className="item">Passionfruit</h2>
                        <h3 className="price">$4.99</h3>
                        <p className="description">A bag of delicious passionfruit!</p>
                        <label for="item-3-quantity">Quantity:</label>
                        <input type="text" name="item-3-quantity" id="item-3-quantity" value="1" />
                        <button type="button" name="item-3-button" id="item-3-button" onClick={() => addToCart()}>Add to Cart</button>
                    </div>
                </div>
                
            </div>

        </Fragment>
    )
}

export default HomeContent