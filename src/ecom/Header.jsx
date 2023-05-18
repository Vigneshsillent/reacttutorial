import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/logo.png';
import CartIcon from './images/bag-icon.png';

const Header = (props) => {

    return (
        <Fragment>
            <div className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-light bg-light justify-content-between">
                        <div id="mySidenav" className="sidenav">
                            <Link >Home</Link>
                            <Link >Products</Link>
                            <Link >About</Link>
                            <Link >Contact</Link>
                            
                        </div>
                        <a className="logo" href="index.html">
                            <img src={Logo} />
                        </a>
                        <form className="form-inline ">
                            <div className="login_text">
                                <ul>
                                   
                                    <li>
                                        <a href="#" className='badge badge-success badge-rounded'>
                                        {props.cartCount}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default Header