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
        ]
    },
    methods:{
        incrementar(){
            this.contador3++
        },
        getContador(){
            return this.contador3
        },
        actualizar(e){
            console.log('actualizar',e)
            let dato=e.target.value
            console.log(dato)
            this.valor2=dato
        }
    }
}) 
