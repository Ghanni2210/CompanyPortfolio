import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import Benefits from './components/sections/Benefits';
import FoundersNote from './components/sections/FoundersNote';
import Features from './components/sections/Features';
import Services from './components/sections/Services';
import AIStrategy from './components/sections/AIStrategy';
import Process from './components/sections/Process';
import AITransformation from './components/sections/AITransformation';
import SuccessStories from './components/sections/SuccessStories';
import Integrations from './components/sections/Integrations';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Comparison from './components/sections/Comparison';
import Team from './components/sections/Team';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-dark">
      <Navbar />
      <main>
        <Hero />
        <FoundersNote />
        <Benefits />
        <Features />
        <Services />
        <AIStrategy />
        <Process />
        <AITransformation />
        <SuccessStories />
        <Integrations />
        <Testimonials />
        <FAQ />
        <Comparison />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
