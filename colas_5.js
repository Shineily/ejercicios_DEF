// 5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y
// alternando a partir de su índice. los pares en una y los nones en otra
// Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 1: [ amarillo, rojo, azul, morado]
// Cola 2: [rosa, verde, negro, blanco]

stack1 = []
stack2 = []

const divColors = (array) => {

    const saveArray = [...array]

    for(let  i = 0; i < saveArray.length; i++ ){
        console.log(i % 2)

        if(i % 2){
            const curretValue = array.shift()

            stack1.push(curretValue)

            console.log(stack1)
            console.log(array)
        } else {
            const curretValue = array.shift()
            
            stack2.push(curretValue)
            
            console.log(stack2)
            console.log(array)
        }
        
        console.log(stack1)
        console.log(stack2)
    }



}

divColors([ "amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"])