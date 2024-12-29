import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/api1.jpg',
    title: 'Welcome to Developer Zone',
    description: 'Your platform for building and monitoring payment gateway APIs.',
  },
  {
    image: '/images/apitest.jpg',
    title: 'Seamless Integration',
    description: 'Access REST and GraphQL APIs for streamlined operations.',
  },
  {
    image: '/images/flow.png',
    title: 'Enhanced Security',
    description: 'Compliant with PCI DSS and ISO/IEC 27001 standards.',
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 5000); // Smooth auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div className="home-container p-6 sm:p-12 bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800">
      {/* Carousel */}
      <div
        className="carousel relative bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="carousel-image flex-1">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-72 sm:h-96 lg:h-auto object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="carousel-content p-6 sm:p-8 lg:px-12 flex-1 flex flex-col justify-center bg-gradient-to-b from-blue-100 via-white to-gray-50">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-blue-700 tracking-tight">
            {slides[currentIndex].title}
          </h1>
          <p className="text-sm sm:text-lg text-gray-700 mb-6 leading-relaxed">
            {slides[currentIndex].description}
          </p>
         
        </div>
      </div>

      {/* Features Section */}
      <section className="features mt-12 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'API Documentation',
            description:
              'Access developer-friendly API documentation for seamless integration with REST and GraphQL.',
          },
          {
            title: 'Test Environment',
            description:
              'Leverage a sandboxed environment to simulate payment flows and validate security.',
          },
          {
            title: 'API Logs',
            description:
              'Analyze transaction logs in real time to debug errors and optimize performance.',
          },
          {
            title: 'Security Compliance',
            description:
              'Ensure adherence to PCI DSS and ISO/IEC 27001 with advanced encryption technologies.',
          },
          {
            title: 'Performance Metrics',
            description:
              'Monitor response times, uptime, and performance metrics for scalability.',
          },
          {
            title: 'Fraud Detection',
            description:
              'Detect and prevent fraud using AI-driven secure transaction analysis.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="feature-card bg-white p-6 sm:p-8 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg sm:text-2xl font-semibold text-blue-600 mb-3">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
