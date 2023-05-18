import React from 'react'
import './style.css';

const Homeindex = () => {
    return (
        <div>
            <div class="container">
                <form action="">
                    <h2>Login Form</h2>
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <p>Forgot Password?</p>
                    <button>Login</button>
                </form>
                <p class="not-member">Not a member? <a href="">Signup Now</a></p>
            </div>
        </div>
    )
}

export default Homeindex