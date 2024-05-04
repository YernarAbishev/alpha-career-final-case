import React from "react";
import homeImage from "../assets/img/1627631523_56-kartinkin-com-p-estetichnaya-yeda-yeda-krasivo-foto-65.jpg";
import { Link } from "react-router-dom";
import { RECIPES_PAGE_ROUTE } from "../utils/consts";

export default function HomePage() {
  return (
    <div className="container__center">
      <div className="home">
        <div className="home__part">
          <div className="home__name">Cook app</div>
          <div className="home__title">От Мировых Рецептов до Локальных Вкусов</div>
          <div className="home__text">
            Ваш надежный источник в мире кулинарных открытий, объединяющий
            лучшие рецепты со всего мира и местные кулинарные инициативы.
          </div>
          <Link to={RECIPES_PAGE_ROUTE} className="home__btn">
            Рецепты
          </Link>
        </div>
        <div className="home__part">
          <img className="home__image" src={homeImage} alt="" />
        </div>
      </div>
    </div>
  );
}
