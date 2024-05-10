import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import VacanciesPage from "../pages/VacanciesPage";
import GuidesPage from "../pages/GuidesPage";
import LoginPage from "../pages/LoginPage";

import {
  ABOUT_PAGE_ROUTE,
  GUIDES_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  VACANCIES_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  REGISTER_COMPANY_PAGE_ROUTE,
  VACANCY_PAGE_ROUTE,
  GUIDE_ADMIN_PAGE,
  COMPANY_ADMIN_PAGE,
  GUIDE_UPDATE_PAGE_ROUTE, GUIDE_PAGE_ROUTE,
} from "./consts";
import RegisterPage from "../pages/RegisterPage";
import RegisterCompanyPage from "../pages/RegisterCompanyPage";
import VacancyPage from "../pages/VacancyPage";
import GuideAdminPage from "../pages/GuideAdminPage";
import CompanyAdminPage from "../pages/CompanyAdminPage";
import UpdatePost from "../components/guide/UpdateGuideForm";
import GuidePage from "../pages/GuidePage";

export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage,
  },
  {
    path: ABOUT_PAGE_ROUTE,
    element: AboutPage,
  },
  {
    path: VACANCIES_PAGE_ROUTE,
    element: VacanciesPage,
  },
  {
    path: VACANCY_PAGE_ROUTE,
    element: VacancyPage,
  },
  {
    path: GUIDES_PAGE_ROUTE,
    element: GuidesPage,
  },
  {
    path: GUIDE_PAGE_ROUTE,
    element: GuidePage,
  },
  {
    path: LOGIN_PAGE_ROUTE,
    element: LoginPage,
  },
  {
    path: REGISTER_PAGE_ROUTE,
    element: RegisterPage,
  },
  {
    path: REGISTER_COMPANY_PAGE_ROUTE,
    element: RegisterCompanyPage,
  },
  {
    path: GUIDE_ADMIN_PAGE,
    element: GuideAdminPage,
  },
  {
    path: GUIDE_UPDATE_PAGE_ROUTE,
    element: UpdatePost,
  },
  {
    path: COMPANY_ADMIN_PAGE,
    element: CompanyAdminPage,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
