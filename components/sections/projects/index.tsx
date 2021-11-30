import * as React from 'react';
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ProjectSection() {
  return (
    <section id="project" className="portfolio section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Drag To View</span>

      <div className="portfolio__container container">
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {' '}
              <div className="portfolio__content grid">
                <Image
                  width="265"
                  height="200"
                  src="/portfolio1.jpg"
                  alt=""
                  className="portfolio__img img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Modern Website</h3>

                  <p className="portfolio__description">Website demo.</p>
                  <a href="#" className="button button--flex button--smal portfolio__button">
                    Demo <ArrowRightOutlined className="button__icon" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div className="portfolio__content grid">
                <Image
                  width="100%"
                  height="200"
                  src="/portfolio2.jpg"
                  alt=""
                  className="portfolio__img img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Modern Website</h3>

                  <p className="portfolio__description">Website demo.</p>
                  <a href="#" className="button button--flex button--smal portfolio__button">
                    Demo <ArrowRightOutlined className="button__icon" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* <div ref={navigationPrevRef} className="swiper-button-next">
              <CaretRightOutlined className="swiper-portfolio-icon" />
            </div>
            <div ref={navigationNextRef} className="swiper-button-prev">
              <CaretLeftOutlined className="swiper-portfolio-icon" />
            </div> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
