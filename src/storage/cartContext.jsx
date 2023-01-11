import { createContext, useState } from "react";

//1. Inicializo un context, esto es un estado global
//le asigno un valor por defecto de un objeto con prop cart, value array vacio
const cartContext = createContext({ cart: [] });

//2. Extraigo del contexto creado su componente Proveedor
//va a ser el responsable de conectar componentes al contexto
const Provider = cartContext.Provider;

//3. creo mi propio provider

function CartContextProvider(props) {
  //4. creo un estado, aca voy a ir guardando info del carrito
  const [cart, setCart] = useState([]);

  const [orden,setOrden] = useState([])

  //funcion para agregar/setear nuevo carrito, recibe item y cantidad
  function addToCart(item, count) {
    let indexItemInCart = cart.findIndex(
      (itemInContext) => itemInContext.id === item.id
    );
    let isItemInCart = indexItemInCart !== -1;
    //con sspread me hago una copia exacta del contenido del cart en un newCart
    const newCart = [...cart];

    //si el item pasado ya se encuentra o no en el cart
    if (isItemInCart) {
      //si essta, le agrego las nuevas cantidades
      newCart[indexItemInCart].count += count;
      //y seteo el nuevo state
      setCart(newCart);
    } else {
      //si no existe el item en mi cart
      //le pusheo al carrito todas las propiedades con spread y le agrego nuevo count
      newCart.push({ ...item, count: count });
      //seteo nuevo state
      setCart(newCart);
    }
  }
  let totalItemsInCart = 0;
  cart.forEach((item) => (totalItemsInCart += item.count));

  function totalItemsInCartfn() {
    let totalItemsInCart = 0;
    cart.forEach((item) => (totalItemsInCart += item.count));
    return totalItemsInCart;
  }

  function removeItem(item){
    //me guardo la posicion en el carrito del elemento a eliminar
    let indexItemInCart = cart.findIndex(
      (itemInContext) => itemInContext.id === item.id
    );
    //me hago un nuevo carrito el cual voy a poder modificar
    let newCart = [...cart];

    //remuevo segun el index el elemento de mi array nuevo
    newCart.splice(indexItemInCart,1)
    //con el array modificado lo seteo como nuevo carrito sin ese elemento
    setCart(newCart)


  }

  function clearCart(){
    console.log("cart totalmente vaciado")
    setCart([])
  }

  function crearOrden(buyerData){
    setOrden(buyerData)
  }

  //retorno mi provider con el value asociado, que es la informacion a la cual los componentes globalmente se van a poder conectar
  return (
    <Provider
      value={{
        cart,        
        addToCart,
        totalItemsInCart,
        totalItemsInCartfn,
        removeItem,
        clearCart,
        crearOrden
      }}
    >
      {props.children}
    </Provider>
  );
}

export {cartContext,CartContextProvider}