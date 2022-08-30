import Tienda from "./tienda.js";

function obtener_categoria(categoria){

    console.log(categoria)
    let tienda = new Tienda();
    tienda.consumir_api(categoria);
    
}

// botones
document.getElementById("joyas").addEventListener("click",obtener_categoria('jewelery'));
document.getElementById("joyas").addEventListener("click",obtener_categoria('men\'s clothing'));
document.getElementById("joyas").addEventListener("click",obtener_categoria('women\'s clothing'));
document.getElementById("joyas").addEventListener("click",obtener_categoria('electronics'));

