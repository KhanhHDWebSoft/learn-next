import { AppstoreOutlined } from '@ant-design/icons';
import * as React from 'react';
import ServiceModal from './services-modal';

export default function ServiceSection() {
  return (
    <section id="services" className="services section">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <ServiceModal
          services={['I develop the user interface base on design.', 'Web page development.']}
          title="Web Developer"
        >
          <AppstoreOutlined className="services__icon" />
        </ServiceModal>
      </div>
    </section>
  );
}
