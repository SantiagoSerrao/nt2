<template>

  <section class="src-components-formulario">
    <div class="jumbotron">
    <h2>Lista de Gastos</h2>
    
    <form novalidate autocomplete="off" @submit.prevent="enviar()">
      
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          class="form-control"
          v-model="$v.f.nombre.$model"
          >
          <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.nombre.required.$invalid">Nombre no valido</div>
            <div v-else-if="$v.f.nombre.minLength.$invalid">El nombre debe tener al menos 5 caracteres</div>
            <div v-else-if="$v.f.nombre.maxLength.$invalid">La descripcion tiene que ser maximo de 15 caracteres</div> 
              
          </div>
      </div>


      <div class="form-group">
        <label for="gasto">Gasto</label>
        <input 
          type="number" 
          id="gasto" 
          class="form-control"
          v-model.number="$v.f.gasto.$model"
          >
          <div v-if="$v.f.gasto.$error && $v.f.gasto.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.gasto.required.$invalid">Este campo es requerido</div>
          </div>
      </div>

      <div class="form-group">
        <label for="desc">Descripcion</label>
        <input 
          type="text" 
          id="desc" 
          class="form-control"
          v-model="$v.f.desc.$model"
          >
          <div v-if="$v.f.desc.$error && $v.f.desc.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.desc.required.$invalid">Este campo es requerido</div>
          </div>
      </div>


      

      
      



      <div class="form-group">
        <input 
          type="submit"
          :disabled="$v.$invalid"
          class="btn btn-danger mt-4"
          value="Enviar"
        >
        
      </div>

    </form>
    
    

    </div>


  </section>

</template>

<script>
  import {required ,minLength,maxLength} from '@vuelidate/validators'
  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        f:this.resetForm(),
        url:'https://5f90c7dfe0559c0016ad6d78.mockapi.io/endpoint/parcial-nt2'
      }
    },
    validations : {
      f: {
        desc:{
          required
        },
        nombre:{
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
          },
        gasto:{
          required
          }
      } 
    },
    methods: {
      /*Envio de datos al backend*/
      sendDatosFormAxios(datos){
        this.axios.post(this.url,datos,{'content-type':'application/json'})
        .then(resp => console.log(resp.data))
        .catch(error => console.log('HTTP POST ERROR' , error))
      },
     
      enviar(){
        this.$v.$touch()
        if(!this.$v.$invalid){
            let form = this.f
          console.log(form)
          this.sendDatosFormAxios(form)
          this.f=this.resetForm()
          this.$v.$reset()  
        }
        
      },
      resetForm(){
        return{
          desc:'',
          nombre:'',
          gasto:''
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
    background-color:rgba(47, 255, 210, 0.253);
    color: black;
  }
  hr{
    background-color: black;
  }
  pre {
    color:white
  }
  btn {
    background-color: black;
  }
</style>
