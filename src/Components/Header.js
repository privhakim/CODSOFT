// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImage from './Images/logo.png';
import cartImage from './Images/cart.png';

function Header() {
    const [cartItems, setCartItems] = useState([]);

    const updateCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <nav className="flex items-center justify-between bg-slate-950">
            <Link to="/">
                <img src={logoImage} alt="Logo" className="w-40 cursor-pointer" />
            </Link>
            <ul className="flex space-x-5">
                <li><Link to="/" className="no-underline text-white hover:text-red-500">Home</Link></li>
                <li><Link to="/products" className="no-underline text-white hover:text-red-500">Products</Link></li>
                <li><Link to="/contact" className="no-underline text-white hover:text-red-500">Contact</Link></li>
            </ul>
            <Link to="/cart" className="relative">
                <img src={cartImage} alt="Cart" className="w-8 cursor-pointer" />
                {cartItems.length > 0 && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        {cartItems.length}
                    </div>
                )}
            </Link>
        </nav>
    );
}

export default Header;
