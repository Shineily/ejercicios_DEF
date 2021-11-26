// 3. Crear una clase Alumno con los siguientes datos:
// a. Nombre y calificaciones(arreglo de 5 números) y tiene un método para
// obtener el promedio
// b. Crear otra clase llamada Salon que tenga un método que ordene alumnos
// de mayor a menor promedio

class Alumno {
    constructor(nombre, califFinal) {
        this.nombre = nombre;
        this.califFinal = califFinal;

        console.log(this.nombre)
    }


    obtenerPromedio() {
        let prome = this.califFinal.reduce((total, value) => {
            return total + value;
        })

        return prome/this.califFinal.length 
    }
}
class Salon extends Alumno {
    constructor() {
        this.calificaciones = []
        console.log("es un salón de clases")
    }

    

    
    ordenarPromedios() {
        
        const maria = new Alumno('maria', [80,75,86,79,89])
        const jose = new Alumno('jose', [81,76,87,80,90])
        const pedro = new Alumno('pedro', [79,74,85,78,88])
        const sofia = new Alumno('sofia', [82,77,88,81,92])
        const marcos = new Alumno('marcos', [78,71,84,77,87])

        const mariaPromedio = maria.obtenerPromedio()
        const josePromedio = jose.obtenerPromedio()
        const pedroPromedio = pedro.obtenerPromedio()
        const sofiaPromedio = sofia.obtenerPromedio()
        const marcosPromedio = marcos.obtenerPromedio()
        
        console.log(mariaPromedio)
        console.log(josePromedio)
        console.log(pedroPromedio)
        console.log(sofiaPromedio)
        console.log(marcosPromedio)

        this.calificaciones.push()
    }

}

const salon = new Salon()

salon.ordenarPromedios()



