import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <Fragment>
      <li className="card__item">
        <Link className="card__item__link" to={props.path}>
          <figure className="card__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel" className="card__item__img" />
          </figure>
          <div className="card__item__info">
            <h5 className="card__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </Fragment>
  );
};

export default CardItem;
