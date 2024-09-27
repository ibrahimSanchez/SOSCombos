
// Menu escritorio
const btnCB  = document.querySelector('.btn-comidas-bebidas__categorias-escritorio');
const btnA  = document.querySelector('.btn-aseo__categorias-escritorio');
const btnRC  = document.querySelector('.btn-ropa-calzado__categorias-escritorio');
const btnM  = document.querySelector('.btn-mobiliario__categorias-escritorio');
const btnIE  = document.querySelector('.btn-infantiles-escolares__categorias-escritorio');


btnCB.addEventListener('click', () => {
    document.querySelector('.comidas-bebidas__categorias-escritorio').classList.toggle('ocultar');
    btnCB.classList.toggle('invertir');
});

btnA.addEventListener('click', () => {
    document.querySelector('.aseo__categorias-escritorio').classList.toggle('ocultar');
    btnA.classList.toggle('invertir');
});

btnRC.addEventListener('click', () => {
    document.querySelector('.ropa-calzado__categorias-escritorio').classList.toggle('ocultar');
    btnRC.classList.toggle('invertir');
});

btnM.addEventListener('click', () => {
    document.querySelector('.mobiliario__categorias-escritorio').classList.toggle('ocultar');
    btnM.classList.toggle('invertir');
});

btnIE.addEventListener('click', () => {
    document.querySelector('.infantiles-escolares__categorias-escritorio').classList.toggle('ocultar');
    btnIE.classList.toggle('invertir');
});

