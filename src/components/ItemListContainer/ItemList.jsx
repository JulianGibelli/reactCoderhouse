import React from 'react'
import "./itemList.css"
import Item from "./Item"
import Flex from "../Flex/Flex"

export default function ItemList(props) {
  return (
    <div className="itemlist">
      <Flex>
        {console.log(props)}
        {props.listaProductos.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.thumbnail}
            price={product.price}
            description={product.description}
          />
        ))}
      </Flex>
    </div>
  )
}
