import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <nav
      className="navbar has-background-grey-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item Logo" href="/">
          <FontAwesomeIcon icon={faCode} />
          Shibe's
        </a>

        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <NavLink className="my-auto mx-2" to="/category/placasvideo">
            Placas de video
          </NavLink>
          <NavLink className="my-auto mx-2" to="/category/procesadores">
            Procesadores
          </NavLink>
          <NavLink className="my-auto mx-2" to="/category/perifericos">
            Perifericos
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <CartWidget icono={faCartShopping}></CartWidget>
          </div>
        </div>
      </div>
    </nav>
  );
}
