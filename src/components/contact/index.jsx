import React, { useRef } from 'react';
import './Contact.scss';

import emailjs from '@emailjs/browser';
import nav from '../../data/navigation.json';
import contact from '../../data/contact.json';

const Contact = () => {
  const navigation = nav.find(element => element.id === 'contact');
  const form = useRef();
  const delay = 250;
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_send_email',
        'template_portfolio',
        form.current,
        'qBgF506iJs44Yi_dg'
      )
      .then(result => {
        if (result.text === 'OK') {
          alert('Message has been sent!');
          e.target.reset();
        }
      })
      .catch(err => {
        alert(err.text);
      });
  };
  return (
    <section id="contact">
      <h5 data-aos="fade-up" data-aos-delay="100">
        {navigation.meta}
      </h5>
      <h2 data-aos="fade-down" data-aos-delay="300">
        {navigation.section}
      </h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contact.map(({ icon, name, display, link, cta }, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={index * delay}
                data-aos-duration="1000"
              >
                <article className="contact__option">
                  <i className={`${icon} contact__option-icon`} />
                  <h4>{name}</h4>
                  <h5>{display}</h5>
                  <a href={link}>{cta}</a>
                </article>
              </div>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name..."
            required
            data-aos="fade-right"
            data-aos-delay="200"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message..."
            required
            data-aos="fade-left"
            data-aos-delay="800"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
