import logo from './logo.svg';
import './App.css';
import React from 'react';
import HowItWorksSection from './components/HowItWorksSection';
import LandingHeader from './components/LandingHeader';
import Footer from './components/Footer';
import ReadyToStartSection from './components/ReadyToStartSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';

function App() {
  return (
    <>
      <div className="App">
        <LandingHeader />
        <main>          
          <WhyChooseUsSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <ReadyToStartSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
