import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
//1. Traer el array del context
//2. desgloasar o "mapear" los items

function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);

  //render condicional -> "carrito vacío , volvé al inicio"
  if (cart.length > 0) {
    const cantidadTotalAPagar = cart.reduce((total = 0, item) => {
      return total + item.count * item.price;
    }, 0);
    /* return (
      <div className="p-3">
        {cart.map((item) => (
          <div className="card" style={{ marginTop: "50px" }}>
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
                  <p className="subtitle is-6">Total a pagar: ${item.count*item.price}</p>
                  <Button onButtonTouch={() => removeItem(item)}>
                    Remove item
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ); */
    return (
      <div className="container py-5">
        <table className="table my-5 mx-auto">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total a pagar</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Total a pagar: ${cantidadTotalAPagar} </th>
            </tr>
          </tfoot>
          <tbody>
            {cart.map((item) => (
              <tr>
                <td>
                  <img src={item.thumbnail} alt="Placeholder image" />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td> {item.count}</td>
                <td> ${item.count * item.price}</td>
                <td>
                  <Button onButtonTouch={() => removeItem(item)}>
                    Remove item
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    swal({
      title: "UPS!",
      text: "No tenes items en tu carrito!",
      icon: "error",
      type: "error",
    }).then((okay) => {
      if (okay) {
        window.location.href = "/";
      } else {
        window.location.href = "/";
      }
    });
  }
}

export default CartContainer;
