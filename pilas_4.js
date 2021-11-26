// 4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un
// número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse
// primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y
// regresarlos a su respectivo lugar.

const reemplazar = (array, id) => {
    for(let i = array.length-1; i >= 0; i--){


        if(array[i] === id){
            newStack = array.splice(i+1, -i+array.length-1)
            
            console.log(newStack)
            console.log(array)
            
            array.pop()
            
            console.log(array)
            
            array = array.concat(newStack)

            console.log(array)
        }


    }

}

reemplazar([3,2,7,4,6,8,1,9,5,10], 7)