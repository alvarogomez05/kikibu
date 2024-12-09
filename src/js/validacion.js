let form = document.getElementById("form")

let personas = document.getElementById("personas")
let mascotas = document.getElementById("mascotas")
let fondo = document.getElementById("fondo")
let nombre = document.getElementById("nombre")
let apellidos = document.getElementById("apellidos")
let email = document.getElementById("email")

let error = document.getElementById("error")

const validarForm = (event) =>{
    let valido = true;
    //para que no se envie el formulario
    event.preventDefault();

    // empezamos la validacion

    //personas
    if(personas.validity.valueMissing && valido){
        valido = false;
        //error de personas
        // console.log("error")
        error.textContent = "Personas es un campo requerido"
    }

    if((personas.validity.rangeOverflow || personas.validity.rangeUnderflow) && valido){
        valido = false;
        //error en el rango
        error.textContent = "El numero de personas está fuera de rango"
    }

    //mascotas

    if(mascotas.validity.valueMissing && valido){
        valido = false;

        error.textContent = "Mascotas es un campo requerido"
    }

    // fondo

    if(fondo.validity.valueMissing && valido){
        valido = false;

        error.textContent = "Fondo es un campo requerido"
    }    

    //nombre

    if(nombre.validity.valueMissing && valido){
        valido = false;

        error.textContent = "Nombre es un campo requerido"
    }

    if(nombre.validity.patternMismatch && valido){
        valido = false;

        error.textContent = "El nombre debe comenzar por mayuscula"
    }

    //apellidos

    if(apellidos.validity.valueMissing && valido){
        valido = false;

        error.textContent = "Apellidos es un campo requerido"
    }

    if(apellidos.validity.patternMismatch && valido){
        valido = false;

        error.textContent = "Los apellidos deben comenzar por mayuscula"
    }

    //email

    if(email.validity.valueMissing && valido){
        valido = false;

        error.textContent = "El correo es un campo requerido"
    }

    if(email.validity.typeMismatch && valido){
        valido = false;

        error.textContent = "Ha de respetar el formato de un correo"
    }

    //si todo esta correcto se envia

    if(valido){
        form.submit();
    }

}

form.addEventListener("submit",validarForm);

// validacion para el formulario de la modal

let form2 = document.getElementById("form2");

let nombre2 = document.getElementById("nombre2")
let apellidos2 = document.getElementById("apellidos2")
let tlf = document.getElementById("telefono")
let email2 = document.getElementById("email2")
let terms = document.getElementById("terms")

let error2 = document.getElementById("error2")

const validarForm2 = (event) =>{
    let valido = true;
    //para que no se envie el formulario
    event.preventDefault();
    //bloqueamos el scroll
    document.body.style.overflow = "hidden";

    // empezamos la validacion

    //nombre

    if(nombre2.validity.valueMissing && valido){
        valido = false;

        error2.textContent = "Nombre es un campo requerido"
    }

    if(nombre2.validity.patternMismatch && valido){
        valido = false;

        error2.textContent = "El nombre debe comenzar por mayuscula"
    }

    //apellidos

    if(apellidos2.validity.valueMissing && valido){
        valido = false;

        error2.textContent = "Apellidos es un campo requerido"
    }

    if(apellidos2.validity.patternMismatch && valido){
        valido = false;

        error2.textContent = "Los apellidos deben comenzar por mayuscula"
    }

    //telefono

    if(tlf.validity.valueMissing && valido){
        valido = false;

        error2.textContent ="El telefono es un campo requerido"
    }

    if(tlf.validity.patternMismatch && valido){
        valido = false;

        error2.textContent = "El telefono debe estar compuesto por 9 numeros"
    }

    //email

    if(email2.validity.valueMissing && valido){
        valido = false;

        error2.textContent = "El correo es un campo requerido"
    }

    if(email2.validity.typeMismatch && valido){
        valido = false;

        error2.textContent = "Ha de respetar el formato de un correo"
    }

    // terminos

    if(!terms.checked && valido){
        valido = false;

        error2.textContent = "Debes de aceptar nuestros terminos y condiciones"
    }

    //si todo esta correcto se envia
    console.log(valido)

    if(valido){
        console.log("enviar")
        form2.submit();
        // cerrar la modal
        modal.classList.remove("flex");
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";

    }

}



form2.addEventListener("submit",validarForm2)
