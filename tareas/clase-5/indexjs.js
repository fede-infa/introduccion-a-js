//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


const $botonCalcular = document.querySelector('#boton-aceptar');
const $resultado = document.querySelector('#resultado');

// console.log($botonCalcular);

$botonCalcular.onclick = function(){

    const $nombreUsuario = document.querySelector('#nombre-usuario');
    const $apellidoUsuario = document.querySelector('#apellido-usuario');
    const $edadUsuario = document.querySelector('#edad-usuario');

    let resultado = `${$nombreUsuario.value} ${$apellidoUsuario.value} - edad ${String($edadUsuario.value)}`

    document.querySelector('#resultado').innerText = resultado;
    let $h1 = document.querySelector("#titulo");
    $h1.innerText = `Bienvenido, Fede`;
    
    return false;
}

/* 

$botonCalcular.onclick = function () {
    console.log('asdasdasd');
    return false;
} */