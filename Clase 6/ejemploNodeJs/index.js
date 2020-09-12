var a = 5
var b = 6
var c = a+b

console.log(c)

const mensaje = 'Hola Mundo'

  
        

       /*****************************/
       console.log('objeto literal') 

       var persona1 = {
           nombre: 'juan'
                
       }
       console.log(persona1)
       /*devuelve un true o un false si es que tiene la propiedad nombre*/
       console.log(persona1.hasOwnProperty('nombre'))

       var persona2 = Object.create(Object.__proto__.__proto__,{
           nombre: {
               value : 'Pedro',
               writable: true,
               configurable: true
           }
       })

       console.log(persona2)


       /***** usando funcion constructora ***/////
       //le pasas los parametros y lo setes en los this
       function Persona(nombre,edad){
           //console.log(this)
            this.nombre=nombre
            this.edad=edad
       }
       
       /******* /
       /*new es el constructor de objetos -> genera las siguientes
       acciones --> muy parecido a java
        1) crea un objeto vacio -> p={}
       2) ejecuta la funcion constructora en el contexto de ese objeto
       persona.call(p,....,....)
       3) retornar ese objeto p
       */
       var persona3 = new Persona('Juan',233)
       console.log(persona3)
       
       

