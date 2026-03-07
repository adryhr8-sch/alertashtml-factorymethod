import { ToastMsg } from "./bs_toast.js";
import { AlertMsg } from "./bs_alert.js";

export class FactoryMessage {
  crearMsj(opt, título, mensaje) {
    switch (opt) {
      case "toast":
        return new ToastMsg(título, mensaje);
      case "alert":
        return new AlertMsg(título, mensaje);
      default:
        throw new Error("Opción inválida");
    }
  }
}
