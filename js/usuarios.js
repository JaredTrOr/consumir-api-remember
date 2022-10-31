//REGISTRO
function registrarUsuario(){
    $.ajax({
        url: 'http://localhost:3000/usuarioAPI/registro',
        type: 'POST',
        data: {
            nombre: $('#nombre-registro').val(),
            usuario: $('#usuario-registro').val(),
            email: $('#email-registro').val(),
            password: $('#password-registro').val()
        },
        success: (respuesta) => {
            switch(respuesta){
                case 'Usuario registrado':
                    window.location.href = 'notas.html';
                    break;
                case 'Email ya registrado':
                    mensajeAdvertencia(respuesta);
                    console.log(respuesta);
                    break;
                default:
                    mensajeAdvertencia(respuesta);
                    console.log(respuesta);
                    break;
            }
        }
    });
}

//INICIAR SESIÓN
function iniciarSesion(){
    $.ajax({
        url: 'http://localhost:3000/usuarioAPI/inicio',
        type: 'POST',
        data: {
            usuario: $('#usuario-inicio').val(),
            password: $('#password-inicio').val()
        },
        success: (respuesta) => {
            switch(respuesta){
                case 'Usuario iniciado': 
                    window.location.href = 'notas.html';
                    break;
                case 'Administrador iniciado': 
                    informacionAdministrador();
                    redireccionar('administrador.html');
                    break;
                case 'Usuario dado de baja': 
                    mensajeAdvertencia(respuesta); 
                    console.log(respuesta);
                    break;
                default: 
                    mensajeAdvertencia(respuesta);
                    console.log(respuesta);
                    break;
            }
        },
        xhrFields: {
            withCredentials: true
        }
    });
}

//ADMINISTRADOR
function informacionAdministrador(){
    $.ajax({
        url: 'http://localhost:3000/usuarioAPI/administrador',
        type: 'GET',
        success: (tablas) => {
            agregarLocalStorage(tablas);
        },
        xhrFields: {
            withCredentials: true
        }
    });
}

//INSERTAR 
function insertarUsuarioAdministrador(){
    $.ajax({
        url: 'http://localhost:3000/usuarioAPI/insertar-usuario-administrador',
        type: 'POST',
        data: {
            nombre: $('#nombre-registro').val(),
            usuario: $('#usuario-registro').val(),
            email: $('#email-registro').val(),
            password: $('#password-registro').val(),
            rol: $('input[name="rol"]:checked').val()
        },
        success: (respuesta) => {
            switch(respuesta){
                case 'Usuario insertado':
                    informacionAdministrador();
                    redireccionar('../../administrador.html')
                    break;
                case 'Email ya registrado':
                    mensajeAdvertencia(respuesta);
                    console.log(respuesta);
                    break;
                default:
                    mensajeAdvertencia(respuesta);
                    console.log(respuesta);
                    break;
            }
        }
    });
}

//BORRAR USUARIO 
function borrarUsuario(e){
    e.preventDefault();
    let id = e.target.parentElement.parentElement.firstElementChild.innerHTML;
    $.ajax({
        url:'http://localhost:3000/usuarioAPI/borrar-usuario-administrador/?id='+id,
        type:'GET',
        success:() => {
            informacionAdministrador();
            redireccionar('administrador.html');
        }
    });
}

//FUNCIONES APARTE------------------------------------------------------

function mensajeAdvertencia(mensaje){
    $('.advertencia').html(mensaje);
    $('.advertencia').removeClass('noVisible');
    $('.advertencia').addClass('siVisible');
}

function agregarLocalStorage(objeto){
    localStorage.setItem('tablas', JSON.stringify(objeto));
}

function redireccionar(direccion){
    setTimeout(() => {
        window.location.href = direccion;
    },10);
}

//FUNCTIONES EXPORTADAS-------------------------------------------------
export {
    registrarUsuario, 
    iniciarSesion, 
    insertarUsuarioAdministrador, //Exporta a validacion-insertar.js
    borrarUsuario, //Exporta a administrador.js
}


