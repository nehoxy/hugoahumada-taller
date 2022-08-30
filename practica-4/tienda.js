export default class Tienda {

    constructor(){

    }

    async consumir_api(categoria){
        const producto_categoria = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);

        producto_categoria_parseado = await producto_categoria.json();
    }

    async makeTable(){

        await this.getAPI()

        let filas = [];
        
        
        this.crypto_js.forEach(element => {
            let fila = `
            <tr>
                <td>${element.market_cap_rank}</td>
                <td><img src="${element.image}" style="width:35px; height:35px;"></img></td>
                <td>${element.name}</td>
                <td>${element.symbol}</td>
                <td>${element.current_price}</td>
                <td>${element.total_volume}</td>
            </tr>
            `
            filas.push(fila);
        });

        document.getElementById("cuerpo-tabla").innerHTML = filas.join("");
    }
}