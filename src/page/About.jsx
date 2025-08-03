import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../assets/Background.jpg'
const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-600">DigitalID</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your simple solution for modern digital identification
        </p>
      </section>

      {/* Main Content */}
      <section className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <img 
          className="w-full md:w-1/2 rounded-lg shadow-md" 
          src={Background} 
          alt="Digital ID Card Example" 
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Streamlining Identification for Organizations
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              DigitalID provides an easy way for schools, businesses, and communities to issue and manage digital identity cards. Our platform replaces outdated paper systems with convenient, eco-friendly digital cards.
            </p>
            <p>
              Whether you need student IDs, employee badges, or membership cards, our system makes creation and distribution effortless.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Quick card generation with your branding</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Mobile-friendly access anytime, anywhere</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Easy verification with QR codes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Why Choose DigitalID?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🖥️',
              title: 'Easy Setup',
              desc: 'Get started in minutes with our simple dashboard'
            },
            {
              icon: '📱',
              title: 'Mobile Access',
              desc: 'Cards work on any smartphone - no app required'
            },
            {
              icon: '🔄',
              title: 'Instant Updates',
              desc: 'Edit card details anytime without reprinting'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 rounded-xl p-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Go Digital?
        </h3>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Join hundreds of organizations using DigitalID for their identification needs.
        </p>
        <Link to="/create" >
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started Today
        </button>
          </Link>
      </section>
    </div>
  );
};


export default About;

