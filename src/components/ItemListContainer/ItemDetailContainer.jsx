import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../service/APICall";
import Item from "./Item";

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
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
  return (
    <div className="container py-6 is-flex is-justify-content-center">
      <Item
        img={producto.thumbnail}
        title={producto.title}
        price={producto.price}
      />
    </div>
  );
}
