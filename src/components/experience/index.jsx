import React from 'react';
import './Experience.scss';
import data from '../../data/experience.json';
import nav from '../../data/navigation.json';
import { getEffect2 } from '../../utils/effects';

const delay = 250;
const Experience = () => {
  const navigation = nav.find(element => element.id === 'experience');
  return (
    <section id="experience">
      <h5 data-aos="fade-up" data-aos-delay="100">
        {navigation.meta}
      </h5>
      <h2 data-aos="fade-down" data-aos-delay="300">
        {navigation.section}
      </h2>
      <div className="container experience__container">
        <div data-aos="fade-up">
          <div className="experience__frontend">
            <h3>{data.frontend.title}</h3>
            <div className="experience__content">
              {data.frontend.experience.map(({ name, level, image }, index) => {
                return (
                  <article
                    key={index}
                    className="experience__detail"
                    data-aos={getEffect2(index)}
                    data-aos-delay={(index % 2) * delay}
                  >
                    <i className={`${image} experience__detail-icon`} />
                    <div>
                      <h4>{name}</h4>
                      <small className="text-light">{level}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-delay="500">
          <div className="experience__backend">
            <h3>{data.backend.title}</h3>
            <div className="experience__content">
              {data.backend.experience.map(({ name, level, image }, index) => {
                return (
                  <article
                    key={index}
                    className="experience__detail"
                    data-aos={getEffect2(index)}
                    data-aos-delay={(index % 2) * delay}
                  >
                    <i className={`${image} experience__detail-icon`} />
                    <div>
                      <h4>{name}</h4>
                      <small className="text-light">{level}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
