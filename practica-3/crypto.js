export default class Crypto {
    
    crypto_js = []

    constructor(){

    }

    async getAPI(){
        const crypto_json = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

        this.crypto_js = await crypto_json.json();
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