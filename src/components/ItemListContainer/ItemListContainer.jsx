import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getItems from "../../service/APICall";
import {getItemsCategory} from "../../service/APICall";
import "./item.css";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  let [listaProductos, setListaProductos] = useState([]);
  let categoryID = useParams().categoryID;
  console.log("SOY CATEGORY ID", categoryID);

  useEffect(() => {
    if (categoryID === undefined) {
      getItems().then((respuesta) => {
        setListaProductos(respuesta);
      });
    } else {
      getItemsCategory(categoryID).then((respuestaFiltrada) => {
        console.log(respuestaFiltrada);
        setListaProductos(respuestaFiltrada);
      });
    }
  }, [categoryID]);

  return <ItemList listaProductos={listaProductos} />;
}
