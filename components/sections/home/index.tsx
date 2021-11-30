import {
  DownCircleOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import * as React from 'react';
import Image from 'next/image';

export default function HomeSection() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="#" className="home__social-icon">
              <LinkedinOutlined />
            </a>
            <a href="#" className="home__social-icon">
              <GithubOutlined />
            </a>
          </div>

          <div className="home__img">
            <Image src="/blob.svg" alt="blob" width="300" height="300" className="home__blob" />
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, Im Khanh Nguyen</h1>
            <h3 className="home__subtitle">Frontend developer</h3>
            <p className="home__description">
              High level experience in web design and development knowledge, producing quality work
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <MessageOutlined className="button__icon" />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <DownCircleOutlined className="home_scroll-mouse" />
            <span>Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
}
