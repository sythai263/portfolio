import React from 'react';
import data from '../../data/socials.json';

const HeaderSocials = () => {
  const delay = 150;
  return (
    <div className="header__socials">
      {data.map(({ image, link }, index) => {
        return (
          <a
            data-aos="fade-up"
            data-aos-delay={index * delay}
            key={index}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`${image} fa-3x`} />
          </a>
        );
      })}
    </div>
  );
};

export default HeaderSocials;
