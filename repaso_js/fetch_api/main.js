/*
API (Interfaz de programacion de aplicaciones)
*/

/*
OBJETOS
let datos = {
    nombre: 'Pepe',
    dni: 41232458,
    correos: {
        outlook: 'pepito
    }
}
*/

function mostrar_objeto(){
    let cliente = {
        nombre: 'Pepito',
        apellido: 'Pozzo',
        dni: '44567980',
        correos:{
            outlook:'superpepito@outlook.com',
            gmail:'pepis@gmail.com',
            yahoo:'elpepo@yahoo.com.ar'
        }
    }

    // forma tradicional
    /* const outlook = cliente.correos.outlook;
    const gmail = cliente.correos.gmail;
    const yahoo = cliente.correos.yahoo; */
    
    // forma nueva - destructuring object
    const {outlook,gmail,yahoo} = cliente.correos;

    console.log(`
        Correos de pepito:
        Outlook: ${outlook}
        Gmail: ${gmail}
        Yahoo: ${yahoo}
        
        
    `)
}
mostrar_objeto()

// creamos funcion flecha

const consumir_api = async () => {

    // estamos realizando una solicitud HTTP a traves del metodo GET para obtener las publicaciones en notacion JSON
    const publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts')

    // tomando el json para parsear a codigo de javascript
    const publicaciones_definitivas = await publicaciones.json();

    let items_totales = [] //creamos un arreglo para guardar los li

    // forEach una forma de recorrer los elementos
    publicaciones_definitivas.forEach(element => {
        //console.log('Titulo: '+element.title)
        let item = `<li class="list-group-item">${element.title}</li>`
        items_totales.push(item)

    });

    document.getElementById("lista-publicaciones").innerHTML = items_totales.join('');
}
consumir_api();