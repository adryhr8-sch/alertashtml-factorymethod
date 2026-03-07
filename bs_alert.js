export class AlertMsg {
  constructor(título, mensaje) {
    this.título = título;
    this.mensaje = mensaje;
  }

  crearHTML() {
    let wrapper = document.createElement("div");
    wrapper.classList.add(
      "alert",
      "alert-warning",
      "alert-dismissible",
      "fade",
      "show",
    );
    wrapper.role = "alert";

    let header = document.createElement("strong");
    header.textContent = this.título;

    let botón = document.createElement("button");
    botón.type = "button";
    botón.classList.add("btn-close");
    botón.setAttribute("data-bs-dismiss", "alert");

    wrapper.appendChild(header);
    wrapper.append(" " + this.mensaje);
    wrapper.appendChild(botón);

    return wrapper;
  }
}
