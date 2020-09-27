Vue.component('contador',{
    data(){
        return{
            cont : this.init
        }
    },
    props : ['init','color'],
    methods : {
        contar(){
            this.cont ++
        },
        getClassColor(){
            return 'btn-'+this.color
        }
    },
    template : `
            
                <button :class=" ['btn',getClassColor(),'btn-success','my-3']" @click="contar()">Contar {{cont}}</button>
               
                `

})



var app = new Vue({
    el: '#app',
    data:{
        mensaje:'soy un mensaje',
        valor:123,
        valor2:456,
        valor3:789,
        contador:0,
        contador2:0,
        contador3:789,
        mostrar:true,
        alumnos: [
            {nombre : 'Juan' ,  apellido : 'Mei' ,  edad: 32 , curso: true , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'},
            {nombre : 'Pedro' , apellido : 'Picos' ,edad: 24, curso: false , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
            {nombre : 'Lucia' , apellido : 'Gomez' ,edad: 31 , curso: true , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-256.png'},
            {nombre : 'Ana' ,   apellido : 'Lopez' ,edad: 27, curso: false , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'},
        ],
        nombre : '',
        estado1 : true,
        estado2 : true
    },
    methods:{
        borrar(index){
            this.alumnos.splice(index,1)
        },
        agregarAlumno(){
            let alumno = {nombre : 'Santiago' ,  apellido : 'Serrao' ,  edad: 29 , curso: true , foto:''};
            // seteo un alumno a hardcodeado
            this.alumnos.push(alumno)
        }

    },
    computed : {
        calcularAlumnosCurso(){
            let cant = this.alumnos.filter(alumno => alumno.curso).length
            let total = this.alumnos.length
            return {
                cantidad : cant,
                total: total,
                ninguno: cant == 0,
                todos : cant == total,
                uno: cant == 1
            }
        }
    }
}) 
