import React from 'react';
import data from '../../data/cta.json';

const CTA = () => {
  return (
    <div className="cta">
      <a href={data.cv} className="btn" data-aos="fade-right">
        {data.download}
      </a>
      <a href="#contact" className="btn btn-primary" data-aos="fade-left">
        {data.talk}
      </a>
    </div>
  );
};

export default CTA;
