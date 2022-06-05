import React from 'react';
import Header from './components/header';
import Navbar from './components/nav';
import About from './components/about';
import Experience from './components/experience';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
import AOS from 'aos';

import 'aos/dist/aos.css';
AOS.init({
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease',
});

const App = () => {
  return (
    <>
      <Header data-aos="slide-up" />
      <Navbar />
      <About data-aos="slide-up" />
      <Experience data-aos="slide-up" />
      <Services data-aos="slide-up" />
      <Portfolio data-aos="slide-up" />
      <Testimonials data-aos="slide-up" />
      <Contact data-aos="slide-up" />
      <Footer data-aos="slide-up" />
    </>
  );
};

export default App;
