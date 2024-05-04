import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../services/axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import { RECEIPT_PAGE_ROUTE } from "../utils/consts";
import transliterate from "../utils/transliterate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faClock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function AuthorPage() {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [receipts, setReceipts] = useState(null);

  useEffect(() => {
    async function fetchReceipt() {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/users/${params.userid}`);
        setUser(res.data);
        setReceipts(res.data.recepties);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchReceipt();
  }, [params.userid]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !user) {
    return <Error />;
  }
  return (
    <>
      <div className="container__center">
        <div className="author__box">
          <div className="recipes-container">
            {user.recepties.map((receipt) => (
              <div key={receipt.id} className="recipe-card">
                <div className="recipe-image">
                  <img src={receipt.receptImage} alt="Сырники из творога" />
                </div>
                <div className="recipe__content">
                  <ul className="recipe__tags">
                    {receipt.receptTags.map((tag, index) => (
                      <li key={index} className="receipt__tag-item">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={
                      RECEIPT_PAGE_ROUTE.substring(
                        0,
                        RECEIPT_PAGE_ROUTE.length - 13
                      ) +
                      `${user.id}/` +
                      transliterate(receipt.receptName) +
                      "_" +
                      receipt.id
                    }
                  >
                    <h2 className="recipe__title">{receipt.receptName}</h2>
                  </Link>

                  <div className="recipe__info-box">
                    <div className="receipe__author">
                      Автор: {user.name}
                    </div>
                    <div className="recipe__info">
                      <button className="recipe__ingredients">
                        {receipt.receptIngredients.length} ингредиентов
                      </button>
                      <span className="recipe__servings">
                        <FontAwesomeIcon icon={faBowlFood} />{receipt.receptPortions} порции
                      </span>
                      {/* должно быть из базы */}
                      <span className="recipe__time">
                        <FontAwesomeIcon icon={faClock} /> {receipt.receptTime}{" "}
                        минут
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="author__right">
            <div className="author__image">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="author__title">{user.name}</div>

            <button className="author__subscribe-btn">Подписаться</button>

            <div className="author__info">
              <div className="author__count-number">{receipts.length}</div>
              <div className="author__count">Рецептов</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
