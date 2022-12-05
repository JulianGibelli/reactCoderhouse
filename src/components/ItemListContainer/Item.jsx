import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

function Item(props) {
  let urlDetail = `/item/${props.id}`

  return (    
    <Link to={urlDetail}>
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
    </Link>
  );
}

export default Item;
