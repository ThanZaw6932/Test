import React, { useState, useEffect } from 'react';

// Replace slides array with your carousel slide content
const slides = [
  {
    image: 'https://via.placeholder.com/600x400?text=Slide+1',
    title: 'Welcome to Developer Zone',
    description: 'Your platform for building and monitoring payment gateway APIs.',
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Slide+2',
    title: 'Seamless Integration',
    description: 'Access REST and GraphQL APIs for streamlined operations.',
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Slide+3',
    title: 'Enhanced Security',
    description: 'Compliant with PCI DSS and ISO/IEC 27001 standards.',
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Carousel Auto-Slide Functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    }, 3000); // 3-second auto-slide interval
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div className="home-container p-8 bg-gradient-to-b from-slate-100 to-slate-200 text-slate-800">
      {/* Carousel */}
      <div
        className="carousel relative bg-white rounded-lg shadow-lg flex overflow-hidden mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="carousel-image flex-1 transition duration-500 ease-in-out">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="carousel-content p-8 flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">
            {slides[currentIndex].title}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {slides[currentIndex].description}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="features mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'API Documentation',
            description:
              'Access comprehensive, developer-friendly API documentation following REST and GraphQL standards, enabling seamless integration with your systems.',
          },
          {
            title: 'Test Environment',
            description:
              'Leverage our secure, sandboxed environment to simulate end-to-end payment flows, validating performance, compliance, and security.',
          },
          {
            title: 'API Logs',
            description:
              'Monitor real-time transaction logs, analyze performance, debug errors, and maintain compliance with industry regulations like GDPR.',
          },
          {
            title: 'Security Compliance',
            description:
              'Ensure API security with encryption, token-based authentication, and adherence to PCI DSS and ISO/IEC 27001 requirements.',
          },
          {
            title: 'Performance Metrics',
            description:
              'Gain insights into API response times, uptime, and scalability through advanced performance monitoring.',
          },
          {
            title: 'Fraud Detection',
            description:
              'Detect and prevent fraudulent activities using machine learning algorithms for secure transaction processing.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="feature-card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            aria-label={`Feature: ${feature.title}`}
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
