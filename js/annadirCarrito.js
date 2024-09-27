const contadorProductoContenedor = document.querySelector('.contar-productos-compra');
const btnAnnadirCarrito = document.querySelector('.carrito__comprar-mas');

// Para añadir los productos al carrito

 
// Para sumar los productos
window.addEventListener('click', (e) => {
    if(e.composedPath()[0].classList[0] == 'btn-contar'){
        const contenedor = document.querySelector(`.${e.composedPath()[0].id}`);
        let valor = parseFloat(contenedor.innerText);
        if(e.composedPath()[0].classList[1] == 'restar'){
            if(valor > 0) {
                valor--;
            }
        }
        else if(e.composedPath()[0].classList[1] == 'sumar'){
            valor++;
        }
        contenedor.innerHTML = valor;
    }
    if(e.composedPath()[0].classList[0] == 'annadir-carrito' || e.composedPath()[0].classList == 'annadir-carro') {
        let cant = parseFloat(contadorProductoContenedor.textContent) + 1;
        contadorProductoContenedor.textContent = cant;
        contadorProductoContenedor.classList.remove('ocultar');

    }

});











