console.log('Funciones clase , herencia y composicion')

// herencia y composicion


function Persona(nombre,edad){
    this.nombre=nombre
    this.edad=edad
}

Persona.prototype.saludo = function (){
    console.log('Hola');
}

let juan = new Persona('juan',23)
console.log(juan)    


function Empleado (nombre,edad,sueldo){
    ////// esto es composicion
    Persona.call(this,nombre,sueldo)
    this.sueldo = sueldo;
}

Empleado.prototype= Object.create(Persona.prototype) // herencia!!!!!

Empleado.prototype.trabajar = function(){
    console.log('Trabajando ...')
}
let empleado1 = new Empleado('juan',22,10000)
console.log(empleado1)

// Herencia con EMC6 --> muy parecido a JAVA

class PersonaES6 {
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad=edad
    }
    saludo(){
        console.log('Hola!')
    }
}

let juanES6 = new PersonaES6('Juan',32)
console.log(juanES6)

class EmpleadoES6 extends PersonaES6{
    constructor (nombre,edad,sueldo){
        super(nombre,edad)
        this.sueldo=sueldo
    }
    trabajar(){
        console.log('Trabajando...')
    }
    
}
let SantiES6 = new EmpleadoES6('santi',29,100000)
console.log(SantiES6)
