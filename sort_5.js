// Crear una función que ordene un arreglo de coordenadas x, y desde a partir del
// punto mas cercano a 0,0
// a. Entrada -> [[7,3],[2,2],[1,0],[4,3]]
// b. Salida ---> [[1,0],[2,2],[4,3],[7,3]]

const coordinates = [[7,3],[2,2],[1,0],[4,3]]

const sortCoordinates = (array) => {
    array.sort((a, b) => {
        if (a[0]+a[1] < b[0]+b[1]) {
            return -1;
        }
        if (b[0]+b[1] < a[0]+a[1]) {
            return 1;
        }
        return 0;
    });
    
    console.log(array)
}
    sortCoordinates(coordinates)