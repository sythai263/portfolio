import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.scss';
import data from '../../data/testimonial.json';
import nav from '../../data/navigation.json';

const Testimonials = () => {
  const navigation = nav.find(element => element.id === 'testimonials');
  return (
    <section id="testimonials">
      <h5 data-aos="fade-up" data-aos-delay="100">
        {navigation.meta}
      </h5>
      <h2 data-aos="fade-down" data-aos-delay="300">
        {navigation.section}
      </h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1.5}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={500}
        updateOnWindowResize={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        effect={'coverflow'}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {data.testimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="client 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
