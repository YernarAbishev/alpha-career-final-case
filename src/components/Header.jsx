import logo from "../assets/images/logo.svg";
import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  VACANCIES_PAGE_ROUTE,
  GUIDES_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_COMPANY_PAGE_ROUTE,
  GUIDE_ADMIN_PAGE,
  COMPANY_ADMIN_PAGE,
} from "../utils/consts";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import RegisterCompanyForm from "./RegisterCompanyForm";

function Header() {
  const { token, logout } = useAuth();

  return (
    <header className="header">
      <div className="container d-flex align-items-center space-between">
        <Link to={HOME_PAGE_ROUTE} className="header__logo">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="header__nav">
          <li className="nav__item">
            <Link to={HOME_PAGE_ROUTE} className="nav__link">
              Главная
            </Link>
          </li>
          <li className="nav__item">
            <Link to={ABOUT_PAGE_ROUTE} className="nav__link">
              О проекте
            </Link>
          </li>
          <li className="nav__item">
            <Link to={VACANCIES_PAGE_ROUTE} className="nav__link">
              Вакансии
            </Link>
          </li>
          <li className="nav__item">
            <Link to={GUIDES_PAGE_ROUTE} className="nav__link">
              Гайды
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="https://alphaedu.tech/"
              target={"_blank"}
              className="nav__link"
            >
              Курсы
            </Link>
          </li>
        </ul>
        <div className="button-group">
          {token ? (
            <>
              <Link className="button is-primary" to={COMPANY_ADMIN_PAGE}>
                Добавить вакансию
              </Link>
              <Link className="button is-primary" to={GUIDE_ADMIN_PAGE}>
                Добавить гайд
              </Link>
              <button onClick={logout} className="button is-danger">
                Выход
              </button>
            </>
          ) : (
            <Link to={LOGIN_PAGE_ROUTE} className="button is-primary">
              Войти
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
