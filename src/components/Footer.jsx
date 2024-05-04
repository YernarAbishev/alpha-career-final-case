import React from "react";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faLinkedin,
  faTelegram,

} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  VACANCIES_PAGE_ROUTE,
  GUIDES_PAGE_ROUTE,
  MENTOR_PAGE_ROUTE,
  CONTACTS_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from "../utils/consts";
import { useTheme } from "../providers/ThemeProvider";
import classnames from "classnames";
import footer_logo from "../assets/img/footer-logo.png";

export default function Footer() {
  const { isDarkTheme } = useTheme();
  return (
    <footer className={classnames("footer", { dark: isDarkTheme })}>
      <div className="footer__body d-flex justify-content-between">
        <div className="footer__left">
          <img src={footer_logo} alt="footer logo" />
          <div className="footer__socials d-flex mt-5">
            <a href="!#" className="footer__socials-item">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="!#" className="footer__socials-item">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="!#" className="footer__socials-item">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>
        <div className="footer__center">
          <div className="footer__center-title">Навигация</div>
          <div className="footer__center-links d-flex gap-4 mt-5">
            <Link to={HOME_PAGE_ROUTE}>
              <li className="footer__links-item">Главная</li>
            </Link>
            <Link to={VACANCIES_PAGE_ROUTE}>
              <li className="footer__links-item">Вакансии</li>
            </Link>
            <Link to={GUIDES_PAGE_ROUTE}>
              <li className="footer__links-item">Гайды</li>
            </Link>
            <Link to={MENTOR_PAGE_ROUTE}>
              <li className="footer__links-item">Менторство</li>
            </Link>
            <Link to={ABOUT_PAGE_ROUTE}>
              <li className="footer__links-item">Курсы</li>
            </Link>
            <Link to={CONTACTS_PAGE_ROUTE}>
              <li className="footer__links-item">Контакты</li>
            </Link>
            <Link to={LOGIN_PAGE_ROUTE}>
              <li className="footer__links-item">Вход</li>
            </Link>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right-title">Авторы</div>
          <div className="footer__right-links mt-5">
            <Link className="footer__links-item mb-3" to='https://github.com/YernarAbishev'>
              <li className="footer__links-item">@yernar_abishev</li>
            </Link>
            <Link className="footer__links-item" to='https://github.com/ArmanKalmakhambetov'>
              <li className="footer__links-item">@ara458792</li>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
