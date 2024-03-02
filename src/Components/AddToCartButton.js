import React from 'react';

function AddToCartButton({ product, updateCart }) {
  const handleAddToCart = () => {
    updateCart(product); // Call the provided updateCart function
  };

  return (
    <button onClick={handleAddToCart} className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
      Add to Cart
    </button>
  );
}

export default AddToCartButton;