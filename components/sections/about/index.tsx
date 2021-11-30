import * as React from 'react';
import Image from 'next/image';
import { DownloadOutlined } from '@ant-design/icons';

export default function AboutSection() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">Introduction</span>
      <div className="about__container container grid">
        <Image className="about__img" src="/about.png" alt="" width="200" height="100%" />
        <div className="about__data">
          <p className="about__description">
            Web developer, with extensive knowledge and years of experience, working in web
            technologies UI/UX design.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">2+</span>
              <span className="about__info-name">
                Year <br /> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">
                Project <br /> Complete
              </span>
            </div>
            <div>
              <span className="about__info-title">1</span>
              <span className="about__info-name">
                Company <br /> Worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a href="" className="button button--flex">
              Download CV <DownloadOutlined className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
