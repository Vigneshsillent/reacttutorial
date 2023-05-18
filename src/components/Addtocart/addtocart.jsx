import React from 'react'


const addtocart = () => {
    return (
        <div>
            <form className="form-t">
                <div className="productcont">

                    <div className="product">
                        <h3 className="productname">Enfiled Blue</h3>
                        <img className="imgs" src="../Images/RE_blue.jpg" alt="" />
                        <p className="price">₹5.05</p>
                        <button type="button" className="btn" onclick="addtocart(1)" />Add To Cart
                    </div>

                    <div className="product">
                    <h3 className="productname">Enfield Red</h3>
                    <img className="imgs" src="../Images/RE_red.jpg" alt="" />
                    <p className="price">₹8.50</p>
                    <button type="button" className="btn" onclick="addtocart(2)" />Add To Cart
                    </div>

                    <div className="product">
                    <h3 className="productname">Enfield Silver</h3>
                    <img className="imgs" src="../Images/RE_sliver.jpg" alt="" />
                    <p classNamessName="price">₹10.50</p>
                    <button type="button" className="btn" onclick="addtocart(3)" />Add To Cart
                    </div>

                </div>
            </form>
        </div>
                            )
}
export default addtocart