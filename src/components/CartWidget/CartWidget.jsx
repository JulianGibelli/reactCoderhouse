import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styles from "./cartwidget.module.css"
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";

export default function CartWidget(props) {

  //guardo en valuecontext el objeto del contexto creado cartcontext
  const valueContext = useContext(cartContext)
  //me fijo en su propiedad totalitemsincartfn cantidad de items alojados en el carrito y pregunto si son mas que 0
  const hayItemsInCart = valueContext.totalItemsInCartfn() > 0

  return (
   
    <NavLink to="/cart" >
      <FontAwesomeIcon icon={props.icono} className={styles.logo} />

      {/* COMENTARIOS:
        mediante rendering condicional logico, previamente evaluo si tengo o no items en carrito
        si TRUE -> RENDERINZA VALUECONTEXT.TOTALITEMSINCARTFN()
        SI FALSE -> NO SE RENDERIZA

      */}
      <span>{hayItemsInCart && valueContext.totalItemsInCartfn()}</span>
    </NavLink>
  );
}
