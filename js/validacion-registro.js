import { registrarUsuario } from "./usuarios.js";

const botonFormulario = document.getElementById('registro');
const spanNombre = document.getElementById('span-nombre');
const spanUsuario = document.getElementById('span-usuario');
const spanEmail = document.getElementById('span-email');
const spanPassword = document.getElementById('span-password');
const inputs = document.querySelectorAll('input');
let mensaje = document.querySelector('.advertencia');
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
        registrarUsuario();
    }
    contador = 0;
}

function añadirMensajes(id){
    switch(id){
        case 'nombre-registro': cambiarClaseVisible(spanNombre); break;
        case 'usuario-registro': cambiarClaseVisible(spanUsuario); break;
        case 'email-registro': cambiarClaseVisible(spanEmail); break;
        case 'password-registro': cambiarClaseVisible(spanPassword); break;
    }
}

function removerMensajes(id){
    cambiarClaseNoVisible(mensaje);
    switch(id){
        case 'nombre-registro': cambiarClaseNoVisible(spanNombre); break;
        case 'usuario-registro': cambiarClaseNoVisible(spanUsuario); break;
        case 'email-registro': cambiarClaseNoVisible(spanEmail); break;
        case 'password-registro': cambiarClaseNoVisible(spanPassword); break;
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

