import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './Images/logo.png';
import cartImage from './Images/cart.png';

function Navbar({ cartItems }) {
    // Ensure cartItems is an array and not undefined
    const itemCount = Array.isArray(cartItems) ? cartItems.length : 0;

    return (
        <nav className="flex items-center justify-between bg-slate-950">
            <Link to="/">
                <img src={logoImage} alt="Logo" className="w-40 cursor-pointer" />
            </Link>
            <ul className="flex space-x-5">
                <li><Link to="/" className="no-underline text-white hover:text-red-500">Home</Link></li>
                <li><Link to="/about" className="no-underline text-white hover:text-red-500">About</Link></li>
                <li><Link to="/products" className="no-underline text-white hover:text-red-500">Products</Link></li>
                <li><Link to="/contact" className="no-underline text-white hover:text-red-500">Contact</Link></li>
            </ul>
            <div>
                <Link to="/login" className="no-underline text-white hover:text-red-500">
                    <button className="bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 focus:outline-none focus:bg-red-600">
                        Login
                    </button>
                </Link>
            </div>
            <Link to="/cart"> 
                {/* Display cart item count */}
                <div className="relative">
                    <img 
                        src={cartImage} 
                        alt="Cart" 
                        className="w-8 cursor-pointer" 
                        style={{ marginRight: '20px', marginTop: '0px' }} 
                    />
                    {/* Always display the cart item count */}
                    <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">{itemCount}</div>
                </div>
            </Link>
        </nav>
    );
}

export default Navbar;
