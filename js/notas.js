$('#cerrar-sesion').click((e) => cerrarSesion(e));

function obtenerUsuario(){
    let usuario = JSON.parse(localStorage.getItem('tablas'));
    $('#usuario').html(usuario.nombre);
}

function cerrarSesion(e){
    e.preventDefault();
    localStorage.removeItem('tablas');
    window.location.href = 'iniciar-sesion.html';
}

obtenerUsuario();