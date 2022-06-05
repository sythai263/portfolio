import React from 'react';
import './Portfolio.scss';

import data from '../../data/portfolio.json';
import nav from '../../data/navigation.json';
import { getEffect3 } from '../../utils/effects';

const Portfolio = () => {
  const navigation = nav.find(element => element.id === 'portfolio');
  const delay = 250;
  return (
    <section id="portfolio">
      <h5 data-aos="fade-up" data-aos-delay="100">
        {navigation.meta}
      </h5>
      <h2 data-aos="fade-down" data-aos-delay="300">
        {navigation.section}
      </h2>
      <div className="container portfolio__container">
        {data.portfolio.map(({ image, title, github, demo }, index) => {
          return (
            <div
              data-aos={getEffect3(index)}
              data-aos-delay={(index % 3) * delay}
            >
              <article key={index} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img
                    src={image}
                    alt={title}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  />
                </div>
                <h3 data-aos="fade-left" data-aos-delay="300">
                  {title}
                </h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    data-aos="fade-down"
                    data-aos-delay="700"
                  >
                    Live demo
                  </a>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
