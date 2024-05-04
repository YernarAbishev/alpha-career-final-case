import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RECEIPT_PAGE_ROUTE } from "../utils/consts";
import transliterate from "../utils/transliterate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faClock } from "@fortawesome/free-solid-svg-icons";

export default function ReceiptList({ users }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredReceipts, setFilteredReceipts] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState(null);

  const allTags = users.reduce((acc, user) => {
    user.recepties.forEach((receipt) => {
      receipt.receptTags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
    });
    return acc;
  }, []);

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredReceipts(users);
    } else {
      const filteredReceipts = users
        .map((user) => ({
          ...user,
          recepties: user.recepties.filter((receipt) =>
            selectedTags.some((tag) => receipt.receptTags.includes(tag))
          ),
        }))
        .filter((user) => user.recepties.length > 0);
      setFilteredReceipts(filteredReceipts);
    }
  }, [selectedTags, users]);

  const handleRandomRecipe = () => {
    if (filteredReceipts.length > 0) {
      const randomUserIndex = Math.floor(
        Math.random() * filteredReceipts.length
      );
      const randomRecipeIndex = Math.floor(
        Math.random() * filteredReceipts[randomUserIndex].recepties.length
      );
      const randomRecipe =
        filteredReceipts[randomUserIndex].recepties[randomRecipeIndex];
      setRandomRecipe({
        ...randomRecipe,
        user: filteredReceipts[randomUserIndex],
      });
    }
  };
  const handleResetRandomRecipe = () => {
    setRandomRecipe(null);
  };
  return (
    <>
      <div className="recipes__header-box">
        <h1 className="recipes__title">Рецепты</h1>
        <div className="recipes__description">
          Ищите рецепты, выбирая блюда по тэгам. Можно отсортировать
          интересующие блюда по нужным категориям. Если не знаете что
          приготовить, всегда можно воспользоваться случайным рецептом.
        </div>
      </div>
      <p className="tags__title">Сортировать по тэгам</p>
      <div className="tags-container">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={selectedTags.includes(tag) ? "tag-selected" : "tag"}
            onClick={() => handleTagToggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="recipes-container">
        <div className="recipes__random-box">
          <button
            className="author__subscribe-btn"
            onClick={handleRandomRecipe}
          >
            Случайный рецепт
          </button>
          <button
            className="author__subscribe-btn"
            onClick={handleResetRandomRecipe}
          >
            Сбросить
          </button>
        </div>

        {randomRecipe ? (
          <div key={randomRecipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={randomRecipe.receptImage} alt="Сырники из творога" />
            </div>
            <div className="recipe__content">
              <ul className="recipe__tags">
                {randomRecipe.receptTags.map((tag, index) => (
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
                  `${randomRecipe.user.id}/` +
                  transliterate(randomRecipe.receptName) +
                  "_" +
                  randomRecipe.id
                }
              >
                <h2 className="recipe__title">{randomRecipe.receptName}</h2>
              </Link>
              <div className="recipe__info-box">
                <div className="receipe__author">
                  Автор: {randomRecipe.user.name}
                </div>
                <div className="recipe__info">
                  <div className="recipe__ingredients">
                    {randomRecipe.receptIngredients.length} ингредиентов
                  </div>
                  <span className="recipe__servings">
                    <FontAwesomeIcon icon={faBowlFood} />
                    {randomRecipe.receptPortions} порции
                  </span>
                  <span className="recipe__time">
                    <FontAwesomeIcon icon={faClock} /> {randomRecipe.receptTime}{" "}
                    минут
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          filteredReceipts.map((user, index) =>
            user.recepties.map((receipt) => (
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
                      <div className="recipe__ingredients">
                        {receipt.receptIngredients.length} ингредиентов
                      </div>
                      <span className="recipe__servings">
                        <FontAwesomeIcon icon={faBowlFood} />
                        {receipt.receptPortions} порции
                      </span>
                      <span className="recipe__time">
                        <FontAwesomeIcon icon={faClock} /> {receipt.receptTime}{" "}
                        минут
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>
    </>
  );
}
