import React from 'react';
import { Link } from 'react-router-dom';
import groceryImage from '../Components/Images/grocery-image.png'

function Home() {
  return (
    <div className="container min-h-screen bg-cover bg-center px-10 py-2 relative" style={{ backgroundImage: `url(${require('../Components/Images/ground.png')})` }}>
      <div className="text-white mt-48 max-w-xl">
        <h1 className="text-5xl font-semibold leading-normal">Groceries <br /> Delivery in <span className="font-light">15 mins</span></h1>
        <p>Grocify offers a wide range of products, including fresh products, meats, dairy, baked goods, and non-perishable items.</p>
        <div className="mt-10">
          
          <Link to="/products" className="bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border:transparent">
            Order Now
          </Link>
          <Link to="#">Download App <span className="text-lg inline-block rotate-90"> &#10148;</span></Link>
        </div>
      </div>
      <img src={groceryImage} alt="Grocery" className="w-full xl:w-1/2 xl:absolute bottom-0 right-20" />
    </div>
  );
}

export default Home;