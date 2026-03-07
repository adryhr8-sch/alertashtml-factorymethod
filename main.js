import { FactoryMessage } from "./factory_msg.js";

var factoryMsj = new FactoryMessage();

let alertbtn = factoryMsj
  .crearMsj("alert", "Alerta!", "Debes llenar los campos!")
  .crearHTML();

document.getElementById("ejemplo-alert").appendChild(alertbtn);

let toastbtn = factoryMsj
  .crearMsj(
    "toast",
    "Felicidades!!!",
    "Eres el usuario #1,000,000 de esta página, reclama tu iPhone 17 Pro ahora!",
  )
  .crearHTML();

document.getElementById("ejemplo-toast").appendChild(toastbtn);
