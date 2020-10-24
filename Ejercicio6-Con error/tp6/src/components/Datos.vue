<template>
      <div>
          
                
            <div v-if="datos.length">    
                <div class="table-responsive">
                    <table class="table">
                        <tr class="bg-success text-white">
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Email</th>
                        </tr>
                        <tr class="bg-info text-white" v-for="(dato,index) in datos" :key="index">
                            <td>{{dato.nombre}}</td>
                            <td>{{dato.edad}}</td>
                            <td>{{dato.email}}</td>
                        </tr>
                    </table>
                </div>
               </div>

        

       
        </div> 
        

</template>

<script>

  export default  {
    name: 'src-components-datos',
    props: [],
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        datos: [

        ]
      }
    },
    methods: {
       getDatosFormAxios(){
          let url = 'https://5f90c7dfe0559c0016ad6d78.mockapi.io/endpoint/tp6'
          this.axios(url)
          .then(resp => {
            console.log(resp.data)
            this.datos = resp.data
            })
          .catch(error => console.log('HTTP GET ERROR',error))
      },

    },
    computed: {
        calcularDatos(){
          let total= this.datos.length
          return total
        }
    }
}


</script>

<style scoped lang="css">
  .src-components-datos {

  }
</style>
