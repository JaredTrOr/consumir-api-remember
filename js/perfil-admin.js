import {redireccionar, editarPerfil, bajaPerfil, borrarPerfil} from './usuarios.js';

$('body').on('click', '#regresar', (e) => {
    e.preventDefault();
    localStorage.removeItem('administrador');
    redireccionar('../administrador.html');
});

$('body').on('click', '#editar', () => {
    editarPerfil();
    localStorage.removeItem('administrador');
});

$('body').on('click', '#baja', (e) => {
    let id = $('#id-perfil').val();
    bajaPerfil(e,id);
});

$('body').on('click', '#eliminar', (e) => {
    let id = $('#id-perfil').val();
    borrarPerfil(e,id);
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