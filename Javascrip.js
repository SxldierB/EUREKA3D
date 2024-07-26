JAVASCRIPT


//Variable que mantiene el estado visible del carrito
var carritoVisible = false;

//Esperamos que todos los elementos de la página carguen para ejecutar el script
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    // Agregamos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for (var i = 0; i < botonesEliminarItem.length; i++) {
        var button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito);
    }

    // Agregamos funcionalidad al botón de búsqueda
    var searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', searchProducts);
}

// Función de búsqueda de productos
function searchProducts() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let products = document.getElementsByClassName('product');
    
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let text = product.innerText.toLowerCase();
        
        if (text.includes(input)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}
