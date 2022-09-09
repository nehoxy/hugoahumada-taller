//primer paso > crear un arreglo de prueba
let numero=[1,5,10,15]

let nuevo_array=numero.map(element=>element*2)
console.log(nuevo_array)

//ejercicio
let valores=[1,4,9]
let nuevo_valor=valores.map(element=>Math.sqrt(element))
console.log(nuevo_valor)

//mapear un array de objetos
let datos_personales=[
    {nombre:'Franco',apellido:'Bravo'},
    {nombre:'Bruno',apellido:'Acuña'},
    {nombre:'Ignacio',apellido:'Cappellini'}
]

console.log(datos_personales.map(element=>element.nombre+ " " +element.apellido))