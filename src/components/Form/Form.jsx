import React from "react";
import Button from "../Button/Button";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";


export default function Form() {

  const {crearOrden} = useContext(cartContext)  

  function handleOrder(){
    const formEl = document.querySelector("#form")
    formEl.addEventListener("submit",(evt)=>{
        evt.preventDefault()
        console.log("entre al formulario")
        console.log("nombre->",evt.target.name.value)
        console.log("phone->",evt.target.phone.value)
        console.log("email->",evt.target.email.value)

        const buyer = {
            name: evt.target.name.value,
            phone: evt.target.phone.value,
            mail: evt.target.email.value
        }
        console.log("soy buyer",buyer)
        crearOrden(buyer)
        
    })
  }

  return (
    <div className="my-5 py-5">
      <form id="form" className="container is-max-desktop my-5 p-auto">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Text input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Phone</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="phone"
              placeholder="Text input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email input"
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <Button color="#FFE08A" onButtonTouch={handleOrder}>Confirmar orden</Button>
          </div>
          <div className="control">
            <Button color="red">Cancelar orden</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
