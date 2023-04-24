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