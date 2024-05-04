import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { useTheme } from "../providers/ThemeProvider";
import logo from "../assets/img/logo1.png";
import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  VACANCIES_PAGE_ROUTE,
  GUIDES_PAGE_ROUTE,
  MENTOR_PAGE_ROUTE,
  CONTACTS_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from "../utils/consts";

export default function Navbar() {
  const { isDarkTheme } = useTheme();
  return (
    <header className={classnames("header sticky", { dark: isDarkTheme })}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to={HOME_PAGE_ROUTE}>
            <img className="header__logo" src={logo} alt="logo" />
          </Link>

          <div className="d-flex align-items-center justify-content-center gap-5">
            <Link className="header__list-item" to={HOME_PAGE_ROUTE}>
              <li className="header__list-item">Главная</li>
            </Link>
            <Link className="header__list-item" to={ABOUT_PAGE_ROUTE}>
              <li className="header__list-item">О платформе</li>
            </Link>
            <Link className="header__list-item" to={VACANCIES_PAGE_ROUTE}>
              <li className="header__list-item">Вакансии</li>
            </Link>
            <Link className="header__list-item" to={GUIDES_PAGE_ROUTE}>
              <li className="header__list-item">Гайды</li>
            </Link>
            <Link className="header__list-item" to={MENTOR_PAGE_ROUTE}>
              <li className="header__list-item">Менторство</li>
            </Link>
            <Link className="header__list-item" to={CONTACTS_PAGE_ROUTE}>
              <li className="header__list-item">Контакты</li>
            </Link>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Link className="header__list-item" to={LOGIN_PAGE_ROUTE}>
              <button className="header__btn-sigin btn btn-primary">
                Войти
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
