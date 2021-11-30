import { ArrowRightOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import * as React from 'react';

interface ServiceModalProps {
  children: React.ReactNode;
  services: string[];
  title: string;
}

export default function ServiceModal({ children, services, title }: ServiceModalProps) {
  const splitTitle: string[] = title.split(' ');
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="services__content">
      <div>
        {children}
        <h3 className="services__title">
          {splitTitle[0]} <br /> {splitTitle[1]}
        </h3>
      </div>
      <span
        className="button button--flex button--small button--link services__button"
        onClick={() => setIsActive(true)}
      >
        View More
        <ArrowRightOutlined className="button__icon" />
      </span>

      <div className={`services__modal ${isActive ? 'active-modal' : ''}`}>
        <div className="services__modal-content">
          <h4 className="services__modal-title">
            {splitTitle[0]} <br /> {splitTitle[1]}
          </h4>
          <CloseCircleOutlined
            className="services__modal-close"
            onClick={() => setIsActive(false)}
          />
          <ul className="services__modal-services grid">
            {services.map((service, index) => {
              return (
                <li key={index} className="services__modal-service">
                  <CheckCircleOutlined className="services__modal-icon" />
                  <p>{service}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
