import {redireccionar, editarPerfil} from './usuarios.js';

$('body').on('click', '#regresar', (e) => {
    e.preventDefault();
    localStorage.removeItem('administrador');
    redireccionar('../administrador.html');
});

$('body').on('click', '#editar', (e) => {
    localStorage.removeItem('administrador');
    editarPerfil(e);
});

$('body').on('click', '#baja', (e) => {
    editarPerfil(e);
});

function desplegarInformacion(){
    let admin = JSON.parse(localStorage.getItem('administrador'));
    $('#id-perfil').val(admin.id);
    $('#nombre-perfil').val(admin.nombre);
    $('#usuario-perfil').val(admin.usuario);
    $('#email-perfil').val(admin.email);
    $('#password-perfil').val(admin.password);
}

desplegarInformacion();