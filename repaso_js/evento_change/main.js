function aplicar_descuento() {
    const precio = document.getElementById("inp_precio").value;
    const descuento = document.getElementById("slt_operar").value;

    
}

document.getElementById("btn_calcular").addEventListener("click",aplicar_descuento);

document.getElementById("slt_operar").addEventListener("change",aplicar_descuento);