import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { createBuyOrder } from "../../service/firebase";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
//1. Traer el array del context
//2. desgloasar o "mapear" los items

function CartContainer() {
  const { cart, removeItem, clearCart, orden } = useContext(cartContext);

  //TODO: TERMINAR ESTE GENERADOR DE ORDEN AL CLICKEAR FINALIZAR COMPRA!!
  function handleCheckout(total) {
    const order = {
      buyer: orden,
      item: cart,
      total: total,
      date: new Date(),
    };

    createBuyOrder(order).then((respuesta) => {
      console.log("respuesta->", respuesta);
      swal({
        title: "Orden creada!",
        text: `Tu ticket es: ${respuesta.id}`,
        icon: "success",
      }).then((okay) => {
        if (okay) {
          window.location.href = "/";
          clearCart();
        } else {
          window.location.href = "/";
          clearCart();
        }
      });
    });
  }

  //render condicional -> "carrito vacío , volvé al inicio"
  if (cart.length > 0) {
    const cantidadTotalAPagar = cart.reduce((total = 0, item) => {
      return total + item.count * item.price;
    }, 0);

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
            <tr>
              {/* 
              ESTO LLEVAR A FORMULARIO
              <Button color="green" onButtonTouch={() => handleCheckout(cantidadTotalAPagar)}>Finalizar compra</Button>
              */}
              <Link to="/form">
                <Button color={"red"}>Generar order</Button>
              </Link>
            </tr>
          </tfoot>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
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
