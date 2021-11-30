import { CalendarOutlined, FileProtectOutlined, IdcardOutlined } from '@ant-design/icons';
import * as React from 'react';

export default function QualificationSection() {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container">
        <div className="qualification__tabs">
          <div
            onClick={() => setActiveTab(1)}
            className={`qualification__button button--flex ${activeTab === 1 ? 'active' : ''}`}
          >
            <FileProtectOutlined className="qualification__icon" />
            Education
          </div>

          <div
            onClick={() => setActiveTab(2)}
            className={`qualification__button button--flex ${activeTab === 2 ? 'active' : ''}`}
          >
            <IdcardOutlined className="qualification__icon" />
            Work
          </div>
        </div>

        <div className="qualification__sections">
          {activeTab === 1 ? (
            <div className="qualification__content qualification__active">
              {/* 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Computer Enginner</h3>
                  <span className="qualification__subtitle">FPT Univeristy</span>
                  <div className="qualification__calendar">
                    <CalendarOutlined />
                    2016 - 2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              {/* 2 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">Udemy Institute</span>
                  <div className="qualification__calendar">
                    <CalendarOutlined />
                    2016 - 2020
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="qualification__content">
              {/* 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Frontend Dev</h3>
                  <span className="qualification__subtitle">HD websoft</span>
                  <div className="qualification__calendar">
                    <CalendarOutlined />
                    2016 - 2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>

              {/* 2 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">Udemy Institute</span>
                  <div className="qualification__calendar">
                    <CalendarOutlined />
                    2016 - 2020
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
