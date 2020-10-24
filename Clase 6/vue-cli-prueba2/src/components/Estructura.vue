<template>

  <section class="src-components-estructura">
          <div class="jumbotron">
          <h2>Directivas Estructurales</h2>
           <ul>
                    <li v-for="(alumno,index) in alumnos" :key="index">
                        {{alumno.nombre}} {{alumno.apellido}}
                    </li>
                </ul>
                <br>
            </div>
            <button class="btn btn-warning my-3" @click="agregarAlumno()">Agregar alumno</button>    
            <div v-if="alumnos.length">    
                <div class="table-responsive">
                    <table class="table">
                        <tr class="bg-success text-white">
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Curso</th>
                            <th>Foto</th>
                        </tr>
                        <tr class="bg-info text-white" v-for="(alumno,index) in alumnos" :key="index">
                            <td>{{alumno.nombre}}</td>
                            <td>{{alumno.apellido}}</td>
                            <td>{{alumno.edad}}</td>
                            <td>{{alumno.curso}}</td>
                            <td>
                                <img :src='alumno.foto' width="50" :alt="alumno.nombre"> 
                            </td>
                        </tr>
                    </table>
                       
                    <div class="alert alert-info">
                        <!--Mensaje Ninguno hizo el curso -->
                        <div v-if="calcularAlumnosCurso.ninguno">
                            Ningun alumno hizo el curso
                        </div>
                        <!--Mensaje Todos hicieron el curso -->
                        <div v-else-if="calcularAlumnosCurso.todos">
                            Todos los alumnos hicieron el curso
                        </div>
                        <!-- Mensaje Algunos hicieron el curso -->
                        <div v-else>
                            {{calcularAlumnosCurso.cantidad}}  {{(calcularAlumnosCurso.uno)?'alumno hizo' : 'alumnos hicieron'}} el curso, de un total de {{calcularAlumnosCurso.total}}   
                        </div>
                        
                    </div> 

                </div>

                <br>
                <div class="media alert alert-primary" v-for="(alumno,index) in alumnos" :key="index">
                    <img :src='alumno.foto' width="150" :alt="alumno.nombre">
                    <div class="media-body ml-3">
                        <h6><u>Alumno {{index +1}}</u></h6>
                        <br>
                        <p>Nombre: {{alumno.nombre}}</p>
                        <p>Apellido: {{alumno.apellido}}</p>
                        <p>Edad: <i>{{alumno.edad}}</i></p>
                        Hizo el curso <input type="checkbox" v-model="alumno.curso">
                        <!--agrego un botton para que llame al metodo borrar creado en vue -->
                        <button class="btn btn-danger ml-3" @click="borrar(index)">Borrar</button>
                    </div>
                </div>
            </div>
                <h1 v-else class="alert alert-warning">
                    No se encontraron alumnos
                </h1>
                <hr>


                <h4><u> v-if / v-else-if / v-else</u></h4>
                <h2>v-if / v-else-if / v-else</h2>
                <br>
                <input type="text" v-model="nombre"><br>
                <div class="btn btn-primary mt-3">
                    <div v-if="nombre.toLowerCase() == 'juan'">  
                        Bienvenido {{nombre}}
                    </div>
                    <div v-else-if="nombre.toLowerCase() == 'ana'">  
                        Bienvenida {{nombre}}
                    </div>
                    <div v-else-if="nombre.toLowerCase() == 'pedro'">  
                        Bienvenido {{nombre}}
                    </div>
                    <div v-else-if="nombre.length >=3">  
                        Hola {{nombre}}
                    </div>
                    <div v-else>
                        Ingrese Nombre
                    </div>
                </div>
                <hr>
  
  </section>

</template>

<script>

  export default  {
    name: 'src-components-estructura',
    props: [],
    mounted () {

    },
    data () {
      return {
         mostrar:true,
        alumnos: [
            {nombre : 'Juan' ,  apellido : 'Mei' ,  edad: 32 , curso: true , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'},
            {nombre : 'Pedro' , apellido : 'Picos' ,edad: 24, curso: false , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png'},
            {nombre : 'Lucia' , apellido : 'Gomez' ,edad: 31 , curso: true , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-256.png'},
            {nombre : 'Ana' ,   apellido : 'Lopez' ,edad: 27, curso: false , foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'},
        ],
        nombre : ''
      }
    },
    methods: {
        borrar(index){
            this.alumnos.splice(index,1)
        },
        agregarAlumno(){
            let alumno = {nombre : 'Santiago' ,  apellido : 'Serrao' ,  edad: 29 , curso: true , foto:''};
            // seteo un alumno a hardcodeado
            this.alumnos.push(alumno)
        }
    },
    computed: {
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
}


</script>

<style scoped lang="css">
  .src-components-estructura {

  }
  .jumbotron{
    background-color: crimson;
    color: white;
  }
  hr{
    background-color: #ddd;
  }
  .table td, .table th{
    vertical-align: middle;
}
</style>
