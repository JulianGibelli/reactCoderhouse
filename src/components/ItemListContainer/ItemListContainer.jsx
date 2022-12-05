import React,{useEffect,useState} from "react";
import GetItems from "../../service/APICall";
import "./item.css";
import ItemList from "./ItemList";



export default function ItemListContainer() {

let [listaProductos, setListaProductos] = useState([])  


useEffect(()=>{
  GetItems()  
  .then((resolveResp)=>{
    console.log(resolveResp)
    setListaProductos(resolveResp)
  })
  .catch((error)=>{
    console.error("error a la busqueda")
  })
},[])


  return (

    <ItemList listaProductos={listaProductos}/>

    

  );
}
