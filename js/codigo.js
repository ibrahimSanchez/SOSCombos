const fondoEncabezado = document.querySelector('.texto-encabezado__contenedor');
const btnCrearCuenta = document.getElementById('btn-crear-cuenta');
const btnRestablecerContrasenna = document.getElementById('retablecer-contrasenna');
const btnTieneCuenta = document.getElementById('btn-tiene-cuenta');
console.log("IbrahimSanchez");

let c = 0;
let a = 0;

 setInterval(()=> {
    c++;
    if(c===1){
        fondoEncabezado.classList.replace('fondo1', 'fondo2');
    }
    else if(c===2) {
        fondoEncabezado.classList.replace('fondo2', 'fondo3');
    }
    else if(c===3) fondoEncabezado.classList.replace('fondo3', 'fondo1');
    if(c===3) c = 0;
}
, 3000); 


btnCrearCuenta.addEventListener('click', () => {
    document.querySelector('.cuadro__inicio-sesion').classList.replace('form-activo', 'form-oculto');
    document.querySelector('.cuadro__registrar').classList.replace('form-oculto', 'form-activo');    
});

btnRestablecerContrasenna.addEventListener('click', () => {
    document.querySelector('.cuadro__inicio-sesion').classList.replace('form-activo', 'form-oculto');
    document.querySelector('.cuadro__restablecer-contrasenna').classList.replace('form-oculto', 'form-activo');    
});

btnTieneCuenta.addEventListener('click', () => {
    document.querySelector('.cuadro__inicio-sesion').classList.replace('form-oculto', 'form-activo');
    document.querySelector('.cuadro__registrar').classList.replace('form-activo', 'form-oculto');    
});


