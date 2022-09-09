export default class Cotizacion {

    constructor(){

    }

    async getApi(){
        this.dolarData = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        this.parsedDolarData = await this.dolarData.json()
    }

    async makeTable(){
        await this.getApi()


        let filas = []
        this.parsedDolarData.forEach((element) => {
            
            let { compra,venta,nombre} = element.casa
            let fila = `
            <tr>
                <td>${nombre}</td>
                <td>${compra}</td>
                <td>${venta}</td>
            </tr>        
            `
            filas.push(fila)
        });
        document.getElementById("cuerpo-tabla").innerHTML = filas.join("")


    }
}