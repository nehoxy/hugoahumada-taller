import Cotizacion from "./cotizacion.js"


const obtener_dolar= async()=>{
    let cotizacion=new Cotizacion()
    cotizacion.makeTable()
}
obtener_dolar()