// vamos a crear un arreglo
let lenguajes = ['Java','Python','JavaScript','C++','Visual Basic','Go'];

// longitud de un arreglo
let longitud = lenguajes.length;
console.log('Longitud del arreglo = '+longitud);

// acceder al ultimo elemento de un arreglo
let ultimo = lenguajes[longitud-1];

// recorrer arreglo con foreach
lenguajes.forEach((element,index) => {
    console.log((index+1)+"-"+element)
});

// Agregar un elemento al final del arreglo
lenguajes.push('Php')
console.log(lenguajes);

// Como elimino el ultimo elemento del arreglo
lenguajes.pop();

// Agregar un elemento al inicio de un arreglo
lenguajes.unshift('C#')
console.log(lenguajes)

// Como eliminar el primer elemento del arreglo
lenguajes.shift();
console.log(lenguajes);
