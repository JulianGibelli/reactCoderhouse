import React from "react";

import "./item.css";

function Item(props) {
  return (
    /* <div className="card">
      <div className="card-img">
        <img src={props.img} alt="imagen producto"></img>
      </div>
      <div className="card-detail">
        <h2>{props.title}</h2>
        <h4 className="priceTag">$ {props.price}</h4>
        <small>{props.condition}</small>
      </div>
    </div> */

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.img} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6">${props.price}</p>
          </div>
        </div>

        <div className="content">{props.description}</div>
      </div>
    </div>
  );
}

export default Item;
