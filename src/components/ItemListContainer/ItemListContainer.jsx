import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getItems from "../../service/APICall";
import {getItemsCategory} from "../../service/APICall";
import "./item.css";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  let [listaProductos, setListaProductos] = useState([]);
  let categoryID = useParams().categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getItems().then((respuesta) => {
        setListaProductos(respuesta);
      });
    } else {
      getItemsCategory(categoryID).then((respuestaFiltrada) => {
        setListaProductos(respuestaFiltrada);
      });
    }
  }, [categoryID]);

  return <ItemList listaProductos={listaProductos} />;
}
