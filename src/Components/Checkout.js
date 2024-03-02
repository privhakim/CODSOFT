import React, { useState } from 'react';

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or process it
    console.log(formData);
    // Reset form fields
    setFormData({
      fullName: '',
      email: '',
      address: '',
      city: '',
      zip: ''
    });
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-gray-700">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="zip" className="block text-gray-700">ZIP Code</label>
            <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
