<template>
        <div>
          
                
            <div >    
                <div class="table-responsive">
                    <table class="table">
                        <tr class="bg-success text-white">
                            <th>Descripcion</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Fecha de creacion</th>
                        </tr>
                        <tr class="bg-info text-white" v-for="(dato,index) in datos" :key="index">
                            <td>{{dato.desc}}</td>
                            <td>{{dato.nombre}}</td>
                            <td>{{dato.email}}</td>
                            <td>{{formatearFecha(dato.createdAt)}}</td>
                        </tr>
                    </table>
                </div>
              </div>
            
       
       </div>

</template>



<script>
import filters from '../filters.js'
  export default  {
    name: 'src-components-datos',
    mixins: [filters],
    props: [],
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        datos:[

        ]
      }
    },
    methods: {
      getDatosFormAxios(){
          let url = 'https://5f90c7dfe0559c0016ad6d78.mockapi.io/endpoint/tp7'
          this.axios(url)
          .then(resp => {
            console.log(resp.data)
            this.datos = resp.data
            })
          .catch(error => console.log('HTTP GET ERROR',error))
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-datos {

  }
</style>
