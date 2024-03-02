import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Product from './Pages/Product'; 
import Checkout from './Components/Checkout';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './Components/Footer'; 
import CartList from './Pages/CartList';

function App() {
  
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartList cartItems={cartItems} />} /> {/* Pass cartItems to CartList */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;