// 4. Crear una funcion que ordene palabras de menor numero de letras a mayor
// a. Ej Entrada [“adios”,“hola”,“maximo”,“uno”,“despedida”]
// b. salida -> [“”uno,“hola”,“adios”,“maximo”,“despedida”]

const stringArray = ['adios', 'hola', 'maximo', 'uno', 'despedida'];
const sortWords = (array) => {
  const arraySorted = array.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    }
    if (b.length < a.length) {
      return 1;
    }
    return 0;
  });

  console.log(arraySorted);
};

sortWords(stringArray);
