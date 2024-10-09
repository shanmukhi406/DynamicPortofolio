import React from 'react';
import NavbarSection from '../Components/NavbarSection';
import HeroSection from '../Components/HeroSection';
import About from '../Components/About';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const LandingPage = ({ change }) => {
  return (
    <div>
      <NavbarSection change={change} />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
