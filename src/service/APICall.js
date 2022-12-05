import productos from "../data/db";

//FUNCION APICALL, DEVUELVE LA PROMESA DE TRAER DE LA BD EN 2 SEGUNDOS LA INFO DE PRODUCTOS
//Cuando la llame desde otro lado me uno a la promesa por medio de .then .catch .finally
function GetItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      reject("error en la api");
    }, 2000);
  });
  /* return fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648") */

  
}

/* va a buscar en la BD segun id de categoria, filtra (si hay) y devuelvo promise filtrado */
/* de lo contrario devuelve un reject, informando que no hay elementos de tal categoria */
export function GetItemsCategory(categoryID) {
    return new Promise((resolve, reject) => {
      let itemsFound = productos.filter((item) => {
        return item.category === categoryID;
      });

      if (itemsFound.length > 0) resolve(itemsFound);
      else reject("No hay productos para esta categoría.");
    });
  }

  /* buscara unicamente por el ID del item solicitado, devolviendo una promesa ya que es busqueda asincrona en la BD, puede estar como no */
export  function GetSingleItem(itemID) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemFound = productos.find(
          (itemInArray) => itemInArray.id === parseInt(itemID)
        );
        if (itemFound) resolve(itemFound);
        else reject("Item no encontrado");
      }, 500);
    });
  }

export default GetItems

