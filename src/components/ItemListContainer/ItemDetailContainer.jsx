import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { getSingleItem } from "../../service/APICall";
import Item from "./Item";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";
import ItemCount from "./ItemCount";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [countInCart, setCountInCart] = useState(0)

  const {addToCart, removeItem} = useContext(cartContext)

  const parametroURL = useParams().itemID;
  useEffect(() => {
    getSingleItem(parametroURL)
      .then((res) => {
        console.log(res);
        setProducto(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddToCart(count){
    setCountInCart(count)
    addToCart(producto,count)
  }

  return (
    <div className="container py-6 is-flex-direction-column">
     <div className="card-detail_img">
        <img src={producto.thumbnail} alt={producto.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{producto.title}</h1>
        <h4 className="priceTag">$ {producto.price}</h4>
        <p>{producto.description}</p>
      </div>

      <ItemCount onAddToCart={handleAddToCart}/>
           
      <Link to="/cart">Ir al carrito</Link>
    </div>
  );
}
