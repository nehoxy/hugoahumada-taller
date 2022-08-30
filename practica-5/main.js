import Tienda from "./tienda.js";

function obtener_categoria(){

    let tienda = new Tienda();
    tienda.categoria = document.getElementById("slt_filtro").value;
    tienda.consumir_api()
}




document.getElementById("slt_filtro").addEventListener("change",obtener_categoria)