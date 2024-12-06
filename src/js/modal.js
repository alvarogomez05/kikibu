let modal = document.getElementById("modal");
let cerrar = document.getElementById("modal");

const mostrar = () =>{
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

const ocultar = () =>{
    modal.classList.remove("flex");
    modal.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded",mostrar);
cerrar.addEventListener("click",ocultar);