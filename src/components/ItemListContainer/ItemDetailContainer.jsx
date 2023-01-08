import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleItem } from "../../service/firebase";
import Item from "./Item";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";
import ItemCount from "./ItemCount";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [countInCart, setCountInCart] = useState(0);

  const { addToCart, removeItem } = useContext(cartContext);

  const parametroURL = useParams().itemID;
  useEffect(() => {
    getSingleItem(parametroURL)
      .then((res) => {
        setProducto(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddToCart(count) {
    setCountInCart(count);
    addToCart(producto, count);
  }

  return (
    <div className="container py-6 is-flex-direction-column">
      <div className="card-detail_img">
        <img src={producto.thumbnail} alt={producto.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{producto.title}</h1>
        <h4 className="priceTag">$ {producto.price}</h4>
        {producto.oferta && (<h2 style={{ color: "green" }}>{producto.oferta}% discount</h2> )}
        <p>{producto.description}</p>
      </div>
      
      {/* rendering condicional para mostrar o no itemcount y link a carrito*/}

      {countInCart >0 ? <Link to="/cart" style={{display:"block",marginTop:"50px",color:"red"}}>Ir al carrito</Link> : <ItemCount onAddToCart={handleAddToCart} /> }
    </div>
  );
}
