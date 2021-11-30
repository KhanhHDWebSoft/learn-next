import { FacebookOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import * as React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Khanh Nguyen</h1>
            <span className="footer__subtitle">Frontend Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>

            <li>
              <a href="#project" className="footer__link">
                portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="footer__link">
                Contact me
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a href="" className="footer__social">
              <FacebookOutlined />
            </a>
            <a href="" className="footer__social">
              <LinkedinOutlined />
            </a>
            <a href="" className="footer__social">
              <GithubOutlined />
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; Khanh Nguyen. All right reversed</p>
      </div>
    </footer>
  );
}
