import React from 'react';
import { Phone, Calendar, Search, Menu } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={16} />
            <span className="text-sm">Emergency: (800) 123-4567</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/patient-portal" className="text-sm hover:text-blue-200">Patient Portal</Link>
            <Link href="/careers" className="text-sm hover:text-blue-200">Careers</Link>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            MedCare
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about">About</Link>
            <Link href="/departments">Departments</Link>
            <Link href="/doctors">Doctors</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <Calendar size={18} />
              <span>Book Appointment</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}