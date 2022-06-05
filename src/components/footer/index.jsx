import React from 'react';
import './Footer.scss';
import socials from '../../data/socials.json';
import nav from '../../data/navigation.json';
import info from '../../data/info.json';
import { getEffect3 } from '../../utils/effects';

const Footer = () => {
  const delay = 200;
  return (
    <footer>
      <a
        href="/"
        className="footer__logo"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        {info.name}
      </a>
      <ul className="permalinks">
        {nav.map(({ id, meta, section }, index) => {
          return (
            <li
              key={index}
              data-aos="flip-right"
              data-aos-delay={(index % 10) * delay}
            >
              <a href={`#${id}`}>{section}</a>
            </li>
          );
        })}
      </ul>
      <div className="footer__socials">
        {socials.map(({ image, link }, index) => {
          return (
            <a
              href={link}
              data-aos={getEffect3(index)}
              data-aos-delay={(index % 10) * delay}
            >
              <i className={image}></i>
            </a>
          );
        })}
      </div>
      <div
        className="footer__copyright"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <small>&copy; {info.name}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
