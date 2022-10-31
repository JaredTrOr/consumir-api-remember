import { iniciarSesion } from "./usuarios.js";

const botonFormulario = document.getElementById('iniciar');
const spanUsuario = document.getElementById('span-usuario');
const spanPassword = document.getElementById('span-password');
const inputs = document.querySelectorAll('input');
let mensaje = document.querySelector('.advertencia'); //Quitar mensaje con los inputs
let contador = 0;

botonFormulario.addEventListener('click', (e) => {
    validacion(e);
});

inputs.forEach(input => input.addEventListener('click', (e) => {
    removerMensajes(e.target.id);
}));

function validacion(e){
    inputs.forEach(input => {
        if(input.value === ''){
            e.preventDefault();
            añadirMensajes(input.id);
            contador++;
        }
    });

    if(contador === 0){
        iniciarSesion();
    }
    contador = 0;
}

function añadirMensajes(id){
    switch(id){
        case 'usuario-inicio': cambiarClaseVisible(spanUsuario); break;
        case 'password-inicio': cambiarClaseVisible(spanPassword); break;
    }
}

function removerMensajes(id){
    cambiarClaseNoVisible(mensaje);
    switch(id){
        case 'usuario-inicio': cambiarClaseNoVisible(spanUsuario); break;
        case 'password-inicio': cambiarClaseNoVisible(spanPassword); break;
    }
}

function cambiarClaseVisible(span){
    span.classList.remove('noVisible');
    span.classList.add('siVisible');
}

function cambiarClaseNoVisible(span){
    span.classList.remove('siVisible');
    span.classList.add('noVisible');
}