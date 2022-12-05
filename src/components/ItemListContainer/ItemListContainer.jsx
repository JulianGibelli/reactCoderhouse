import React,{useEffect,useState} from "react";
import {GetItems,GetItemsCategory} from "../../service/APICall";
import "./item.css";
import ItemList from "./ItemList";




export default function ItemListContainer() {

let [listaProductos, setListaProductos] = useState([])  


useEffect(() => {
  if (categoryID === undefined) {
    GetItems().then((respuesta) => {
      setListaProductos(respuesta);
    });
  } else {
    GetItemsCategory(categoryID).then((respuestaFiltrada) =>
    setListaProductos(respuestaFiltrada)
    );
  }
}, [categoryID]);



  return (

    <ItemList listaProductos={listaProductos}/>

    

  );
}
