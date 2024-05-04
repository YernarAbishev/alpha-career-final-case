import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AUTHOR_PAGE_ROUTE } from "../utils/consts";

export default function Authors({ users }) {
  
  return (
    <>
      <h1 className="recipes__title">Авторы</h1>
      <div className="authors__body">
        {users.map((item, index) => (
          <Link
          key={index}
            to={
              AUTHOR_PAGE_ROUTE.substring(0, AUTHOR_PAGE_ROUTE.length - 7) +
              `${item.id}`
            }
            className="authors__card"
          >
            <div className="authors__image">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="authors__info-box">
              <div className="authors__title">{item.name}</div>
              <div className="authors__recipes">
                количество рецептов: {item.recepties.length}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
