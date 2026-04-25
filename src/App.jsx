import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import StayOptions from './components/StayOptions';
import PropertyCards from './components/PropertyCards';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SearchBar />
      <StayOptions />
      <PropertyCards />
      <Amenities />
      <Testimonials />
      <Gallery />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
