
const obtener_usuarios = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const userslist = await users.json();
    
    let filas = [];

    userslist.forEach( (element,index) => {
        let fila = `
            <tr>
                <td>${index+1}</td>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.website}</td>
            </tr>
        `   
        filas.push(fila);
    });

    document.getElementById("cuerpo-tabla").innerHTML = filas.join("");
}
obtener_usuarios();