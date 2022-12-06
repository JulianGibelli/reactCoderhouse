import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styles from "./cartwidget.module.css"

export default function CartWidget(props) {
  return (
   /*  <a className="navbar-item Logo" href="/">
      <FontAwesomeIcon icon={props.icono} />
    </a> */
    <NavLink to="/cart" >
      <FontAwesomeIcon icon={props.icono} className={styles.logo} />
    </NavLink>
  );
}
