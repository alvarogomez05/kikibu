let modal = document.getElementById("modal");
let cerrar = document.getElementById("modal");

const mostrar = () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    //asi se bloqueria el scroll vertical
    // document.body.style.overflow = "hidden";
}

const ocultar = () => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    //asi se desbloqueria el scroll vertical
    // document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", mostrar);
cerrar.addEventListener("click", ocultar);