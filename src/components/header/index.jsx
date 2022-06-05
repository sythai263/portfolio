import React from 'react';
import './Header.scss';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Typical from 'react-typical';
import info from '../../data/info.json';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5 data-aos="fade-down">Hello, I'm</h5>
        <h1 data-aos="fade-up">{info.name}</h1>
        <Typical steps={info.majors} loop={Infinity} className="text-light" />
        <CTA />
        <HeaderSocials />
        <div data-aos="fade-up">
          <div className="me">
            <img src={info.avatar} alt="me" />
          </div>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
