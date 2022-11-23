import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function CartWidget(props) {
  return (
    <a className="navbar-item Logo" href="/">
      <FontAwesomeIcon icon={props.icono} />
    </a>
  );
}
