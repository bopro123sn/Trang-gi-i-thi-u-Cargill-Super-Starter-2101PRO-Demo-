import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Technology from './components/Technology';
import FeedingProgram from './components/FeedingProgram';
import SpecialOffers from './components/SpecialOffers';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import VideoSection from './components/VideoSection';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Technology />
        <VideoSection />
        <FeedingProgram />
        <FAQ />
        <SpecialOffers />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;