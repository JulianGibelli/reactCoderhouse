import productos from "../data/db"

//FUNCION APICALL, DEVUELVE LA PROMESA DE TRAER DE LA BD EN 2 SEGUNDOS LA INFO DE PRODUCTOS
//Cuando la llame desde otro lado me uno a la promesa por medio de .then .catch .finally
export default function GetItems(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(productos)
            reject("error en la api")
        },2000)
    })
    /* return fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648") */
    
}
