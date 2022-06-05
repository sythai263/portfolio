import React from 'react';
import './Services.scss';
import { BsCheck2Circle } from 'react-icons/bs';
import data from '../../data/service.json';
import nav from '../../data/navigation.json';
import { getEffect3 } from '../../utils/effects';

const Services = () => {
  const delay = 250;
  const navigation = nav.find(element => element.id === 'services');

  return (
    <section id="services">
      <h5 data-aos="fade-up" data-aos-delay="100">
        {navigation.meta}
      </h5>
      <h2 data-aos="fade-down" data-aos-delay="300">
        {navigation.section}
      </h2>
      <div className="container service__container">
        {data.services.map(({ name, descriptions }, index) => {
          return (
            <div
              data-aos={getEffect3(index)}
              data-aos-delay={(index % 3) * delay}
            >
              <article key={index} className="service">
                <div className="service__head">
                  <h3>{name}</h3>
                </div>
                <ul className="service__list">
                  {descriptions.map(des => {
                    return (
                      <li
                        data-aos={getEffect3(index)}
                        data-aos-delay={(index % 3) * delay}
                      >
                        <BsCheck2Circle className="service__list-icon" />
                        <p>{des}</p>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
