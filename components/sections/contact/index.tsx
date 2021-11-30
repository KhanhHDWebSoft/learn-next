import * as React from 'react';

import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

export default function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__contain container grid">
        <div>
          <div className="contact__information">
            <PhoneOutlined className="contact__icon" />
            <div>
              <h3 className="contact__title">Call me</h3>
              <span className="contact__subtitle">+81938494081</span>
            </div>
          </div>

          <div className="contact__information">
            <MailOutlined className="contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">khanhng3009@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <HomeOutlined className="contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">VietNam - Bach Dang - Binh Thanh district.</span>
            </div>
          </div>
        </div>

        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Name
              </label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <input type="Email" className="contact__input" />
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Message
              </label>
              <textarea cols={0} rows={7} className="contact__input" />
            </div>

            <div>
              <a href="#" className="button button--flex">
                Send Message
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
