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
          v-model="$v.f.nombre.$model"
          
          >
          <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.nombre.required.$invalid">Nombre no valido</div>
            <div v-else-if="$v.f.nombre.minLength.$invalid">El nombre debe tener al menos 5 caracteres</div>
              
              
          </div>
      </div>

      <div class="form-group">
        <label for="edad">Edad</label>
        <input 
          type="number" 
          id="edad" 
          class="form-control"
          v-model.number="$v.f.edad.$model"
          
          >
          <div v-if="$v.f.edad.$error && $v.f.edad.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.edad.required.$invalid">Campo requerido</div>
            <div v-else-if="$v.f.edad.between.$invalid">La edad debe estar entre los 18 y los 120 años</div>
          </div>
      </div>
      <div class="form-group">
        <label for="mail">Email</label>
        <input 
          type="text" 
          id="email" 
          class="form-control"
          v-model="$v.f.email.$model"
          
          >
          <div v-if="$v.f.email.$error && $v.f.email.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.email.required.$invalid">Este campo es requerido</div>
            <div v-else-if="$v.f.email.email.$invalid">Este mail no es valido</div>
            
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
  import {email,required ,minLength, between} from '@vuelidate/validators'
  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        f:this.resetForm(),
        url:'https://5f90c7dfe0559c0016ad6d78.mockapi.io/endpoint/tp6'
      }
    },
    validations : {
      f: {
        nombre:{
          required,
          minLength: minLength(5)
          },
        edad:{
          required,
          between: between(18,120)
          },
        email:{
          required,
          email
          }
      } 
    },
    methods: {
      /*Envio de datos al backend*/
      async sendDatosFormAxios(datos){
        try{
          let resp= await this.axios.post(this.url,datos,{'content-type':'application/json'})
          console.log(resp.data)
        }
        catch(error){
          console.log('HTTP POST ERROR' , error)
        }
      },
     
      enviar(){
        // el touch activa las validaciones entonces no envio en blanco
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
          nombre:'',
          edad:'',
          email:''
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
  pre {
    color:white
  }
</style>
