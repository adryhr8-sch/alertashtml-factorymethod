export class ToastMsg {
  constructor(título, mensaje) {
    this.título = título;
    this.mensaje = mensaje;
  }

  crearHTML() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("toast", "show");
    wrapper.role = "alert";
    wrapper.ariaLive = "assertive";
    wrapper.ariaAtomic = "true";

    let headerWrapper = document.createElement("div");
    headerWrapper.classList.add("toast-header");

    let header = document.createElement("strong");
    header.classList.add("me-auto");
    header.textContent = this.título;

    let btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.classList.add("btn-close");
    btnClose.setAttribute("data-bs-dismiss", "toast");

    headerWrapper.appendChild(header);
    headerWrapper.appendChild(btnClose);

    let bodyWrapper = document.createElement("div");
    bodyWrapper.classList.add("toast-body");
    bodyWrapper.textContent = this.mensaje;

    wrapper.appendChild(headerWrapper);
    wrapper.appendChild(bodyWrapper);

    return wrapper;
  }
}
