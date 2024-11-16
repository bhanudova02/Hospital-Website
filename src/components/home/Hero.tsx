import React from 'react';
import { ArrowRight, Phone, Calendar, Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Health,
            <br />
            Our Priority
          </h1>
          <p className="text-xl mb-8 text-blue-50">
            Providing world-class healthcare with compassion and excellence.
            Experience the future of medical care today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition group">
              <Calendar size={20} />
              <span>Book Appointment</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white text-blue-900 px-6 py-4 rounded-lg hover:bg-gray-100 transition">
              <Search size={20} />
              <span>Find a Doctor</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition">
              <Phone size={20} />
              <span>Emergency Care</span>
            </button>
          </div>

          <div className="flex items-center space-x-8">
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-blue-200">Specialties</div>
            </div>
            <div>
              <div className="text-4xl font-bold">200+</div>
              <div className="text-blue-200">Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-blue-200">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}