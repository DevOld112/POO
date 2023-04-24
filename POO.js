//Ejercicio - 01

// Crea una clase Perro con propiedades 
// como nombre, raza, edad, dueño, y métodos como ladrar(), correr(), sentarse().

class perro{
    constructor(nombre, raza, edad, dueño){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.dueño = dueño;
    }
    ladrar(){
        console.log(`${this.nombre}, ¡Ladra!`)
        console.log(`GUAU!`)
    }
    correr(){
        console.log(`${this.nombre}, corre!`)
    }
    sentarse(){
        console.log(`${this.nombre}, sientate.`)
    }
}

let rex = new perro('Rex', 'Dalmata', 4, 'Omar Gonzalez');
let bruno = new perro('Bruno', 'Pitbull', 6, 'Ana Lopez');

// Ejecucion de metodos

rex.ladrar();
rex.correr();
rex.sentarse();

bruno.correr()
bruno.ladrar();
bruno.sentarse();

// Ejercicio - 02

// Crea una clase Círculo con propiedades como radio, y métodos como calcularArea(), calcularCircunferencia().

class circulo{
    constructor(radio){
        this.radio = radio;
    }
    calcularArea(){
        let area = Math.PI * (this.radio ** 2)
        console.log(area)
    }
    calcularCircunferencia(){
        let circunferencia = 2 * Math.PI * (this.radio)
        console.log(circunferencia)
    }
    ejecutarCalculos(){
        this.calcularArea()
        this.calcularCircunferencia();
    }
}

let circuloPrimario = new circulo(15);

//Ejecucion de metodos

circuloPrimario.ejecutarCalculos();

// Ejercicio - 03 

//Crea una clase Estudiante con propiedades como nombre, edad, curso, calificaciones, 
//y metodos como calcularPromedio(), verCalificaciones().
class estudiante{
    constructor(nombre, edad, curso, calificaciones){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
        this.calificaciones = calificaciones;
    }
    calcularPromedio(){
        let sumaPromedio = this.calificaciones.reduce((acc, arr) => acc + arr, 0)
        let divisor = this.calificaciones.length
        return sumaPromedio / divisor
    }
    verCalificaciones(){
        return `${this.nombre}, del curso de ${this.curso}, ha obtenido: ${this.calificaciones[0]} en el Primer Parcial, ${this.calificaciones[1]} en el Segundo Parcial, ${this.calificaciones[2]} en el Tercer Parcial, ${this.calificaciones[3]} en el Cuarto Parcial, ${this.calificaciones[4]} en el Quinto Parcial`
    }
}

let daniel = new estudiante('Daniel', 13, 'Matematica', [17, 15, 20, 18, 20])

daniel.calcularPromedio();
daniel.verCalificaciones();