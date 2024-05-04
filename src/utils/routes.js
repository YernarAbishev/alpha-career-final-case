
import HomePage from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import SettingsPage from "../pages/SettingsPage";
import ReceiptPage from "../pages/ReceiptPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthorPage from "../pages/AuthorPage";
import LoginPage from "../pages/LoginPage";
import MentorPage from "../pages/MentorPage";
import ContactPage from "../pages/ContactPage";
import GuidesPage from "../pages/GuidesPage";
import GuidePage from "../pages/GuidePage";
import VacanciesPage from "../pages/VacanciesPage";
import VacancyPage from "../pages/VacancyPage";
import AboutPage from "../pages/AboutPage";
import CompanyRegisterPage from "../pages/CompanyRegistrPage";



import {
  HOME_PAGE_ROUTE,
  RECEIPT_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  RECIPES_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  AUTHOR_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  VACANCIES_PAGE_ROUTE,
  VACANCY_PAGE_ROUTE,
  GUIDES_PAGE_ROUTE,
  GUIDE_PAGE_ROUTE,
  MENTOR_PAGE_ROUTE,
  CONTACTS_PAGE_ROUTE,
  REGIST_PAGE_ROUTE,
  REGIST_COMPANY_PAGE_ROUTE
} from "./consts";
import RegistrPage from "../pages/RegistrPage";



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
    path: RECIPES_PAGE_ROUTE,
    element: RecipesPage,
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage,
  },
  {
    path: RECEIPT_PAGE_ROUTE,
    element: ReceiptPage,
  },
  {
    path: AUTHOR_PAGE_ROUTE,
    element: AuthorPage,
  },
  {
    path: LOGIN_PAGE_ROUTE,
    element: LoginPage,
  },
  {
    path: REGIST_PAGE_ROUTE,
    element: RegistrPage,
  },
  {
    path: REGIST_COMPANY_PAGE_ROUTE,
    element: CompanyRegisterPage,
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
    path: MENTOR_PAGE_ROUTE,
    element: MentorPage,
  },
  {
    path: CONTACTS_PAGE_ROUTE,
    element: ContactPage,
  },
  
  {
    path: "*",
    element: NotFoundPage,
  },
  
];