import React from 'react';
import './About.scss';
import data from '../../data/about.json';
import nav from '../../data/navigation.json';
import { getEffect3 } from '../../utils/effects';

const About = () => {
  const delay = 250;
  const navigation = nav.find(element => element.id === 'about');
  return (
    <section id="about">
      <h5 data-aos="fade-up" data-aos-delay="100">
        {navigation.meta}
      </h5>
      <h2 data-aos="fade-down" data-aos-delay="300">
        {navigation.section}
      </h2>
      <div className="container about__container">
        <div className="about__me" data-aos="fade-up" data-aos-delay="100">
          <div className="about__me-image">
            <img src={data.image} alt={navigation.section} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {data.about.map(({ image, name, description }, index) => {
              return (
                <div
                  data-aos={getEffect3(index)}
                  data-aos-delay={(index % 3) * delay}
                >
                  <article key={index} className="about__card">
                    <i className={`${image} about__icon`}></i>
                    <h5>{name}</h5>
                    <small>{description}</small>
                  </article>
                </div>
              );
            })}
          </div>
          <p data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000">
            {data.description}
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
