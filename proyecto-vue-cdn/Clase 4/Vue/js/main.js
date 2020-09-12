// llamada a la instancia de vue

var app = new Vue({
    el: '#app',
    data:{
        alumnos: [
            {nombre : 'Juan' ,  apellido : 'Mei' ,  edad: 32 , curso: si , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'},
            {nombre : 'Pedro' , apellido : 'Picos' ,edad: 24, curso: no , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
            {nombre : 'Lucia' , apellido : 'Gomez' ,edad: 31 , curso: si , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-256.png'},
            {nombre : 'Ana' ,   apellido : 'Lopez' ,edad: 27, curso: no , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'},
        ]
    },
    methods:{
        borrar(iteracion){
            this.alumnos.splice(index,1)
        },
        agregarAlumno(){
            //let alumno = {nombre : 'Santiago' ,  apellido : 'Serrao' ,  edad: 29 , curso: true , foto:''};
            //this.alumnos.push(alumno)
        }
    }
}) 
