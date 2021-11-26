// 1.- Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).
// Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
// Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]

const pila = (array, number) => {
    return array.splice(0,number)
}

console.log(pila(["‘Manzana’","‘Cebolla’","‘Apio’","‘Naranja’","‘Papaya’","‘Sandía’","‘Melón’"], 4))