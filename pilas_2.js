// 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo
// Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo
// valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y
// hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

const reemplazar = (array, nuevo, viejo) => {
    for(let i = array.length-1; i >= 0; i--){
        console.log(array[i])

        if(array[i] === viejo){
            array[i] = nuevo
            break
        }else {
            array.pop()
        }
    }

    return array
}

console.log(reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2))