import React from "react";
import "./item.css";

export default function ItemListContainer(props) {
  return (
    <div className="container">
      <div className="notification is-primary">{props.children}</div>
    </div>
  );
}
