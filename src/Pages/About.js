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
    },
    { 
      title: 'Meet Our Founder',
      description: 'Get to know the visionary behind our quick and efficient grocery delivery service. With a passion for innovation and customer satisfaction, our founder leads the way in providing lightning-fast delivery to your doorstep.',
      image: 'founder.png'
    },
    { 
      title: 'Join Our Community',
      description: 'Become a part of our vibrant grocery delivery community! Experience the convenience of quick and efficient service while connecting with fellow customers who value prompt delivery and quality products.',
      image: 'community.jpg'
    }
  ];

  return (
    <div className="container mx-auto mt-10 mb-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">About Us</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutSections.map((section, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden relative">
            <div className="h-86">
              <img src={`/assets/${section.image}`} alt={section.title} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                  <p className="text-gray-300">{section.description}</p>
                </div>
              </div>
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
