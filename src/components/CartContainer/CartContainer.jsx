import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
//1. Traer el array del context
//2. desgloasar o "mapear" los items

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  //render condicional -> "carrito vacío , volvé al inicio"

  return (
    <div className="p-3">
      {cart.map((item) => (
        <div className="card" style={{marginTop:"50px"}}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={item.thumbnail} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{item.title}</p>
                <p className="subtitle is-6">${item.price}</p>
                <p className="subtitle is-6">Cantidad: {item.count}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
