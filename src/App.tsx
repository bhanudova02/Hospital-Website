import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Specialties } from './components/home/Specialties';
import { EmergencyBanner } from './components/home/EmergencyBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[104px]">
        <Hero />
        <Specialties />
      </main>
      <EmergencyBanner />
    </div>
  );
}

export default App;