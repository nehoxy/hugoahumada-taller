export default class Tienda {

    categoria = ''

    constructor(){

    }

    async consumir_api(){
        const producto_categoria = await fetch(`https://fakestoreapi.com/products/category/${this.categoria}`);

        const producto_categoria_parseado = await producto_categoria.json();

        let columnas = [];
        
        
        producto_categoria_parseado.forEach(element => {
            
            let descripcion = element.description
            descripcion = descripcion.substring(55,0)

            let titulo = element.title
            titulo = titulo.substring(15,0)

            let columna = `
            <div class="col-lg-4 mt-4 mb-2">
                <div class="card" style="width: 18rem;">
                    <img style="width:15rem; height:20rem;" src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${titulo}}</h5>
                      <p class="card-text">${descripcion} </p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>
            `
            columnas.push(columna);
        });

        document.getElementById("row1").innerHTML = columnas.join("");
    }
}

   