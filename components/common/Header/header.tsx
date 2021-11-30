import * as React from 'react';
import {
  HomeOutlined,
  UserOutlined,
  ProfileOutlined,
  SwitcherOutlined,
  GithubOutlined,
  ContactsOutlined,
  CloseCircleFilled,
  AppstoreOutlined,
} from '@ant-design/icons';

export default function Header() {
  const [isShowMenu, setIsShowMenu] = React.useState<boolean>(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Khanh Nguyen
        </a>

        <div className={`nav__menu ${isShowMenu ? 'show-menu' : ''}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <HomeOutlined /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <UserOutlined /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <ProfileOutlined /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <SwitcherOutlined /> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#project" className="nav__link">
                <GithubOutlined /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <ContactsOutlined /> Contact Me
              </a>
            </li>
          </ul>

          <CloseCircleFilled onClick={() => setIsShowMenu(false)} className="nav__close" />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" onClick={() => setIsShowMenu(true)}>
            <AppstoreOutlined />
          </div>
        </div>
      </nav>
    </header>
  );
}
