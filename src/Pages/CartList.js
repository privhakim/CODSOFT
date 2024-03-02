import React, { useEffect } from 'react';
import Checkout from '../Components/Checkout';

function CartList({ cartItems }) {
  console.log('CartList rendering with cartItems:', cartItems);

  useEffect(() => {
    console.log('cartItems updated:', cartItems);
  }, [cartItems]); // Run useEffect only when cartItems changes

  return (
    <>
      <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
        {cartItems.length}
      </div>
      {/* Display all added products */}
      {cartItems.length > 0 ? (
        <div className="absolute z-10 top-full right-0 bg-white shadow-md rounded-md p-2 mt-2">
          <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No items in cart</div>
      )}
      <Checkout/>
    </>
  );
}

export default CartList;