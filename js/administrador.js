import { borrarUsuario, bajaUsuario, restaurarUsuario, infoEditarUsuario } 
from './usuarios.js';

/*EVENTOS CLICK-------------------------------------------------------------*/
$('#cerrar-sesion').click((e) => cerrarSesion(e));

$('body').on('click', '.borrar', (e) => borrarUsuario(e));

$('body').on('click', '.baja', (e) => bajaUsuario(e));

$('body').on('click', '.restaurar', (e) => restaurarUsuario(e));

$('body').on('click', '.restaurar', (e) => restaurarUsuario(e));

$('body').on('click', '.editar', (e) => infoEditarUsuario(e));

/*FUNCTIONES UTILIZADAS------------------------------------------------------*/
function renderizarTablas(){
    const tablas = JSON.parse(localStorage.getItem('tablas'));
    let admin = tablas.administrador;
    let tablaUsuarios = tablas.tablaUsuarios;
    let tablaAdmins = tablas.tablaAdmin;
    let tablaBajas = tablas.tablaBajas;

    //RENDERIZANDO USUARIOS
    let columnasUsuarios = '';
    tablaUsuarios.forEach(tablaUsuario => {
        columnasUsuarios = columnasUsuarios + 
        `
        <tr>
            <td>${tablaUsuario.id}</td>
            <td>${tablaUsuario.nombre}</td>
            <td>${tablaUsuario.usuario}</td>
            <td>${tablaUsuario.email}</td>
            <td>${tablaUsuario.password}</td>
            <td class="botones">
                <a href="" class="btn-acciones editar">
                    <i class="ri-pencil-line"></i>
                    Editar
                </a>

                <a href="" class="btn-acciones baja">
                    <i class="ri-subtract-line"></i>
                    Baja
                </a>

                <a href="" class="btn-acciones borrar">
                    <i class="ri-delete-bin-7-line"></i>
                    Borrar
                </a>
            </td>
        </tr>
        `;
    });
    $('#columnas-usuarios').html(columnasUsuarios);

    //RENDERIZANDO ADMINISTRADORES
    let columnasAdmin = '';
    tablaAdmins.forEach(tablaAdmin => {
        columnasAdmin = columnasAdmin + 
        `
        <tr>
            <td>${tablaAdmin.id}</td>
            <td>${tablaAdmin.nombre}</td>
            <td>${tablaAdmin.usuario}</td>
            <td>${tablaAdmin.email}</td>
            <td>${tablaAdmin.password}</td>
            <td class="botones">
                <a href="" class="btn-acciones editar">
                    <i class="ri-pencil-line"></i>
                    Editar
                </a>

                <a href="" class="btn-acciones baja">
                    <i class="ri-subtract-line"></i>
                    Baja
                </a>

                <a href="" class="btn-acciones borrar">
                    <i class="ri-delete-bin-7-line"></i>
                    Borrar
                </a>
            </td>
        </tr>
        `;
    });
    $('#columnas-administradores').html(columnasAdmin);

    //RENDERIZANDO DADOS DE BAJA
    let columnasBaja = '';
    tablaBajas.forEach(tablaBaja => {
        columnasBaja = columnasBaja + 
        `
        <tr>
            <td>${tablaBaja.id}</td>
            <td>${tablaBaja.nombre}</td>
            <td>${tablaBaja.usuario}</td>
            <td>${tablaBaja.email}</td>
            <td>${tablaBaja.password}</td>
            <td class="botones">
                <a href="" class="btn-acciones editar">
                    <i class="ri-pencil-line"></i>
                    Editar
                </a>

                <a href="" class="btn-acciones restaurar">
                    <i class="ri-subtract-line"></i>
                    Restaurar
                </a>

                <a href="" class="btn-acciones borrar">
                    <i class="ri-delete-bin-7-line"></i>
                    Borrar
                </a>
            </td>
        </tr>
        `;
    });
    $('#columnas-bajas').html(columnasBaja);

    $('#admin').html(admin.nombre);
}

function cerrarSesion(e){
    e.preventDefault();
    localStorage.removeItem('tablas');
    window.location.href = 'iniciar-sesion.html';
}

renderizarTablas();
