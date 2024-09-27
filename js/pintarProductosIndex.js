const plantillaProducto = document.querySelector('.plantilla');
const contenedorMejoresProductos = document.querySelector('.productos__contenedor');
const contenedorOfertasEspeciales = document.querySelector('.ofertas-especiales__productos-contenedor');
const contenedorCajaProductos = document.querySelector('.caja-productos');

const iniciarCompraVerProducto = document.querySelector('.iniciar-compra__ver-producto');

const fragmentoMejoresProductos = document.createDocumentFragment();
const fragmentoOfertasEspeciales = document.createDocumentFragment();
const fragmentoVerProducto = document.createDocumentFragment();
const fragmentoCajaProductos = document.createDocumentFragment();
const plantillaProductoSeleccionada = plantillaProducto.querySelector('.plantilla-producto');

const pintarProducto = (productos) => {
    
    //El if es para poder dar la orientacion de cual de los prods se debe poner
    productos.forEach(producto => {
        plantillaProductoSeleccionada.querySelector('h4').textContent = producto.nombre;
        plantillaProductoSeleccionada.querySelector('p').textContent = producto.precio;
        plantillaProductoSeleccionada.querySelector('.sumar').setAttribute('id', producto.clase);
        plantillaProductoSeleccionada.querySelector('.restar').setAttribute('id', producto.clase);
        plantillaProductoSeleccionada.querySelector('#contador').setAttribute('class', producto.clase);

        if (producto.mejor) {
            plantillaProductoSeleccionada.querySelector('.foto-producto').src = producto.foto;
            const clon = plantillaProductoSeleccionada.cloneNode(true);
            fragmentoMejoresProductos.appendChild(clon);
        }
        if (producto.ofertaEspecial) {            
            plantillaProductoSeleccionada.querySelector('.foto-producto').src = producto.foto;
            const aux = plantillaProductoSeleccionada;
            const clon = aux.cloneNode(true);
            fragmentoOfertasEspeciales.appendChild(clon);
        }

        if (producto.iniCompraVerProd) {
            plantillaProductoSeleccionada.querySelector('.foto-producto').src = `.${producto.foto}`;
            const aux = plantillaProductoSeleccionada;
            const clon = aux.cloneNode(true);
            fragmentoVerProducto.appendChild(clon);
        }

        if (producto.ofertaEspecial == undefined) {
            
            plantillaProductoSeleccionada.querySelector('.foto-producto').src = `.${producto.foto}`;
            
            const aux = plantillaProductoSeleccionada;
            const clon = aux.cloneNode(true);
            fragmentoCajaProductos.appendChild(clon);
        }

    })
    
    try {
        contenedorMejoresProductos.appendChild(fragmentoMejoresProductos);
        contenedorOfertasEspeciales.appendChild(fragmentoOfertasEspeciales);
    }catch(error) {
        console.log(error)
    }

    try {
        iniciarCompraVerProducto.appendChild(fragmentoVerProducto);
    }catch(error) {
        console.log(error)
    }

    try {
        contenedorCajaProductos.appendChild(fragmentoCajaProductos);
    }catch(error) {
        console.log(error)
    }
    // try {
    //     contenedorCarrito.appendChild(fragmentoProductoCarrito);
    // }catch(error) {
    //     console.log(error)
    // }
    
    
}
// console.log(dataProductos)
window.addEventListener('load', pintarProducto(dataProductos));


