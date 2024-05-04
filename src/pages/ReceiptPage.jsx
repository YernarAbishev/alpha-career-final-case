import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../services/axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { AUTHOR_PAGE_ROUTE } from "../utils/consts";

export default function ReceiptPage() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    async function fetchReceipt() {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/users/${params.userid}`);
        setUser(res.data);
        const filteredReceipt = res.data.recepties.find(
          (item) => item.id === params.name.substring(params.name.length - 1)
        );
        setReceipt(filteredReceipt);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchReceipt();
  }, [params.userid, params.name]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !receipt || !user) {
    return <Error />;
  }

  return (
    <div className="container__center">
      <div className="recipes__header-box just-center">
        <div className="recipe__tags ">
          {receipt.receptTags.map((tag, index) => (
            <div key={index} className="receipt__tag-item">
              {tag}
            </div>
          ))}
        </div>
        <h1 className="recipes__title">{receipt.receptName}</h1>
      </div>
      <div className="recept__info-box">
        <div className="recept__portions">
          <FontAwesomeIcon className="icon" icon={faBowlFood} />{receipt.receptPortions}
        </div>
        <div className="recept__time">
          <FontAwesomeIcon className="icon" icon={faClock} /> Время
          приготовления: {receipt.receptTime} мин
        </div>
      </div>
      <div className="recept__image-box">
        <img src={receipt.receptImage} alt="receipt" />
      </div>
      <div className="recept__author-box">
        <div className="recept__author_absolute">Автор рецепта</div>
        <div className="recept__author_flexbox">
          <div className="authors__image">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <button className="recept__author-name">
            <Link
              to={
                AUTHOR_PAGE_ROUTE.substring(0, AUTHOR_PAGE_ROUTE.length - 7) +
                `${user.id}`
              }
              className="recept__author-name"
            >
              Автор: {user.name}
              <p>перейдите в профиль</p>
            </Link>
          </button>
        </div>
        <button className="recept__author-subscribe">подписаться</button>
      </div>
      <div className="recept__ingredients">
        <div className="recept__ingredients-title">Ингредиенты</div>
        {receipt.receptIngredients.map((ingr) => (
          <div className="recept__ingredients-item" key={ingr.id}>
            <div className="recept__ing-name">{ingr.ingName}</div>
            <div className="recept__ing-underline"></div>
            <div className="recept__ing-count">
              {ingr.ingWeight === 1
                ? ingr.ingCount + " шт"
                : ingr.ingWeight + " г"}
            </div>
          </div>
        ))}
      </div>
      <div className="recept__discription-title">Инструкция приготовления</div>
      <div className="recept__discription">{receipt.receptDescription}</div>
    </div>
  );
}
