import React from 'react';
import { Phone, Ambulance } from 'lucide-react';

export function EmergencyBanner() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-lg">
          <Phone size={24} />
        </div>
        <div>
          <div className="text-sm font-medium">Emergency? Call Now</div>
          <div className="text-lg font-bold">(800) 123-4567</div>
        </div>
        <div className="animate-pulse">
          <Ambulance size={24} />
        </div>
      </div>
    </div>
  );
}