import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Product from './Pages/Product'; 
import Checkout from './Pages/Checkout';
import Contact from './Pages/Contact';
//import About from './Pages/About';
import Footer from './Components/Footer'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/products" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/About" element={<About />} />*/}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
