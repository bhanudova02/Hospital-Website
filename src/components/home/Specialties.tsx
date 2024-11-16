import React from 'react';
import { Heart, Brain, Eye, Bone, Stethoscope, Baby } from 'lucide-react';

const specialties = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic and treatment options.'
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert care for neurological conditions with cutting-edge technology.'
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services from routine exams to complex surgeries.'
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Specialized care for bones, joints, and musculoskeletal conditions.'
  },
  {
    icon: Stethoscope,
    title: 'Internal Medicine',
    description: 'Primary care services for adults with focus on prevention and wellness.'
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Comprehensive healthcare for children from newborns to adolescents.'
  }
];

export function Specialties() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Medical Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Providing comprehensive care across multiple specialties with state-of-the-art facilities and expert healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                <specialty.icon size={28} className="text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {specialty.title}
              </h3>
              <p className="text-gray-600">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}