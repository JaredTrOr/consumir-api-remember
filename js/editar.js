import {redireccionar, editarUsuario} from './usuarios.js';

$('#regresar').click((e) => {
    e.preventDefault();
    localStorage.removeItem('usuario');
    redireccionar('../administrador.html');
});

$('#editar').click(() => editarUsuario() );

function desplegarInformacion(){
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    $('#id-editar').val(usuario.id);
    $('#nombre-editar').val(usuario.nombre);
    $('#usuario-editar').val(usuario.usuario);
    $('#email-editar').val(usuario.email);
    $('#password-editar').val(usuario.password);
    if(usuario.rol === 1) $('#Admin').attr('checked', true);
    else $('#User').attr('checked', true);
    
}

desplegarInformacion();
