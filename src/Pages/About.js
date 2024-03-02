import React from 'react';

function About() {
  // Sample about data
  const aboutSections = [
    { 
      title: 'Grocery Delivery',
      description: "Experience the convenience of doorstep delivery with our comprehensive range of fresh groceries. From farm-fresh produce to pantry essentials, we've got you covered. Sit back, relax, and let us bring the supermarket to you.",
      image: 'grocery-aboutUs.jpg'
    },
    { 
      title: 'Our Quick Delivery',
      description: 'Experience lightning-fast delivery with our quick and efficient service. We understand that time is of the essence, so we strive to deliver your groceries promptly to your doorstep. Say goodbye to waiting and hello to convenience!',
      image: 'grocery-aboutus2.jpg'
    }
  ];

  return (
    <div className="container mx-auto mt-10 mb-10">
      <h1 className="text-3xl font-bold text-center mb-10">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutSections.map((section, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-64">
              <img src={`/assets/${section.image}`} alt={section.title} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 h-4 bg-white shadow-md"></div> {/* Shadow effect */}
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-bold mb-2">{section.title}</h2>
              <p className="text-gray-700">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;