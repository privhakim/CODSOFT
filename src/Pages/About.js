import React from 'react';

function AboutUs() {
  // Sample about data
  const aboutSections = [
    { 
      title: 'Grocery Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo metus at risus posuere, eu porttitor magna consequat.',
      image: 'grocery-aboutUs.jpg'
    },
    { 
      title: 'Our Quick Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo metus at risus posuere, eu porttitor magna consequat.',
      image: 'grocery-aboutus2.jpg'
    },
    // Add more sections if needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutSections.map((section, index) => (
          <div key={index}>
            <img src={require(`./Image/${section.image}`).default} alt={section.title} className="rounded-lg shadow-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
            <p className="text-gray-700">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
