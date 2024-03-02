import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../Components/AddToCartButton';
import CartList from './CartList';

// Sample product data
const Products = [
    { id: 1, name: 'Cabbage', price: 10, image: 'grocery-cabbage.jpg' },
    { id: 2, name: 'oranges', price: 15, image: 'grocery-orange.jpg' },
    { id: 3, name: 'Bananas', price: 20, image: 'grocery-banana.jpg' },
    { id: 4, name: 'Tomatoes', price: 10, image: 'grocery-tomato.jpg' },
    { id: 5, name: 'Pineapples', price: 15, image: 'grocery-pineapple.jpg' },
    { id: 6, name: 'Meat', price: 100, image: 'grocery-meat.jpg' },
    { id: 7, name: 'Broccoli', price: 10, image: 'grocery-borocoli.jpg' },
    { id: 8, name: 'Mangoes', price: 15, image: 'grocery-mango.jpg' },
    { id: 9, name: 'Carrots', price: 20, image: 'grocery-carrots.jpg' },
    { id: 10, name: 'Peas', price: 10, image: 'grocery-peas.jpg' },
    { id: 11, name: 'Milk', price: 15, image: 'grocery-milk.jpg' },
    { id: 12, name: 'Pasta', price: 20, image: 'grocery-past.jpg' },
    { id: 13, name: 'Eggs', price: 10, image: 'grocery-eggs.jpg' },
    { id: 14, name: 'Almonds', price: 15, image: 'grocery-almondbutter.jpg' },
    { id: 15, name: 'Apples', price: 100, image: 'grocery-apples.jpg' },
    { id: 16, name: 'Baking Powder', price: 10, image: 'grocery-bakingpowder.jpg' },
    { id: 17, name: 'Bread', price: 15, image: 'grocery-bread.jpg' },
    { id: 18, name: 'Cereals', price: 20, image: 'grocery-cereals.jpg' },
    { id: 19, name: 'Charcuterie', price: 10, image: 'grocery-charcutirie.jpg' },
    { id: 20, name: 'yogurt', price: 15, image: 'grocery-yogurt.jpg' },
    { id: 21, name: 'white fish', price: 20, image: 'grocery-whitefish.jpg' },
    { id: 22, name: 'vanilla extract', price: 10, image: 'grocery-vanillaextract.jpg' },
    { id: 23, name: 'Rice', price: 15, image: 'grocery-rice.jpg' },
    { id: 24, name: 'Potato', price: 100, image: 'grocery-potato.jpg' },
    { id: 25, name: 'salt', price: 10, image: 'grocery-salt.jpg' },
    { id: 26, name: 'peanutbutter', price: 15, image: 'grocery-peanutbutter.jpg' },
    { id: 27, name: 'salad', price: 20, image: 'grocery-salad.jpg' },
    { id: 28, name: 'WaterMelon', price: 10, image: 'grocery-watermelon.jpg' },
    { id: 29, name: 'Sugar', price: 15, image: 'grocery-sugar.jpg' },
    { id: 30, name: 'PaprikaPowder', price: 20, image: 'grocery-paprikapowder.jpg' },
    { id: 31, name: 'Onions', price: 10, image: 'grocery-onions.jpg' },
    { id: 32, name: 'Nutmeg', price: 15, image: 'grocery-nutmeg.jpg' },
    { id: 33, name: 'Ginger', price: 100, image: 'grocery-ginger.jpg' },
    { id: 34, name: 'Cumin Powder', price: 10, image: 'grocery-cuminpowder.jpg' },
    { id: 35, name: 'pilipili Hoho', price: 15, image: 'grocery-hoho.jpg' },
    { id: 36, name: 'Honey', price: 20, image: 'grocery-honey.jpg' }
  ];
  
  function Product() {
    const [products, setProducts] = useState(Products);
    const [cartItems, setCartItems] = useState([]);
  
    const updateCart = (product) => {
      // Remove the product from the products list
      const updatedProducts = products.filter((p) => p.id !== product.id);
      setProducts(updatedProducts);
      // Add the product to the cart items
      setCartItems(prevCartItems => [...prevCartItems, product]);
      console.log('Cart items:', cartItems); 
    };

  
    return (
      <div className="container mx-auto py-6">
        <h2 className="text-center text-4xl font-semibold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={`/assets/${product.image}`} alt={product.name} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <AddToCartButton product={product} updateCart={updateCart} />
              </div>
            </div>
          ))}
        </div>
          <Link to="/cart" >
             <CartList cartItems={cartItems} />
          </Link>
      </div>
    );
  }
  
  export default Product;
  