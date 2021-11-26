// 1. Crea una función que ordene de forma descendente un arreglo de números
// a. Ej. Entrada --> [9,3,1,6,5,88,-1,2,7]
// b. Salida → [88,9,7,6,5,3,1,-1]


const sorting = (array) => {
    const sorted = array.sort((a,b) => {
        return b - a
    })

    console.log(sorted)
} 

sorting([9,3,1,6,5,88,-1,2,7])