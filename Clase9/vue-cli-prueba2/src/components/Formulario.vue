<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
    <h2>Formulario</h2>
    
    <form novalidate autocomplete="off" @submit.prevent="enviar()">
      
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          class="form-control"
          v-model.trim="f.nombre.valor"
          name="nombre"
          @input="f.nombre.dirty=true"
          >
          <div v-if="!f.nombre.valor&& f.nombre.dirty" class="alert alert-danger mt-1">
            Este campo es requerido
          </div>
      </div>

      <div class="form-group">
        <label for="edad">Edad</label>
        <input 
          type="number" 
          id="edad" 
          class="form-control"
          v-model.number="f.edad.valor"
          name="edad"
          @input="f.edad.dirty=true"
          >
          <div v-if="!f.edad.valor&&f.edad.dirty" class="alert alert-danger mt-1">
            Este campo es requerido
          </div>
      </div>

      <div class="form-group">
        <input 
          type="submit"
          :disabled="!f.nombre.valor || !f.edad.valor"
          class="btn btn-success mt-4"
          value="Enviar"
        >
        
      </div>

    </form>
    
    
    </div>


  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
      this.getDatosForm()
    },
    data () {
      return {
        f:this.resetForm(),
        url:'https://5f90c7dfe0559c0016ad6d78.mockapi.io/endpoint/datosform'
      }
    },
    methods: {
      /*Envio de datos al backend*/
      sendDatosForm(datos){
        fetch(this.url,{
          method:'post',
          body:JSON.stringify(datos),
          headers:{'content-type':'application/json'}
        })
        .then(response => response.json())
        .then(json => console.log(json))
      },
      /*Pedido de datos al backend */
      getDatosForm(){
        fetch(this.url)
          .then(response => response.json())
          .then(json => console.log(json))
      },
      enviar(){
        
        console.log(this.f),
        this.sendDatosForm({
          nombre: this.f.nombre.valor,
          edad: this.f.edad.valor
          })
        this.f= this.resetForm()
      },
      resetForm(){
        return{
          nombre:{valor:'',dirty:false},
          edad:{valor:'',dirty:false}
        }
      }
    },
    computed: {
      
    },
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
  .jumbotron{
    background-color:blue;
    color: white;
  }
  hr{
    background-color: #ddd;
  }
</style>
