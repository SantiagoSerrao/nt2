<template>

  <section class="src-components-binding">
    <div class="jumbotron">
      <h2>Directivas Data Binding</h2>
      <br>
     <h4><u>Interpolacion</u></h4>
            <br>
            <p>
                {{3+4}}
                {{mensaje}}
            </p>            
            <h4>Property binding</h4>
            <input type="text" value="123"><br>
            <input type="text"  v-bind:value="valor">{{valor}}<br>

            <h4>Event binding/ v-on</h4>
            <button class="btn btn-success my-3 mr-2" v-on:click="contador++">Contar {{contador}}</button>
            <button class="btn btn-warning my-3 mr-2" @click="contador2++">Contar {{contador2}}</button>
            <button class="btn btn-danger my-3 mr-2" @click="incrementar()">Contar {{contador3}}</button>


            <h4><u>Doble data binding /v-model </u></h4>
            <h5>manual</h5>
            <input type="text"  v-bind:value="valor2" @input="actualizar($event)"> {{valor2}}<br>
            <h5>Automatico</h5>
            <input type="text"  v-model="valor3"> {{valor3}}<br>
            
            <br> 
            <hr>

            <h4>
              <u>Componentes</u>
            </h4>
            <Contador init="123" color="danger"></Contador>
            <Contador init="456" color="warning"></Contador>
            <Contador init="789" color="success"></Contador>

    </div>
  </section>

</template>

<script>
  import Contador from './contador/index.vue'

  export default  {
    name: 'src-components-binding',
    props: [],
    components: {
      Contador
    },
    mounted () {

    },
    data () {
      return {
        mensaje:'soy un mensaje',
        valor:123,
        valor2:456,
        valor3:789,
        contador:0,
        contador2:0,
        contador3:789
      }
    },
    methods: {
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
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-binding {

  }
  .jumbotron{
    background-color: purple;
    color: white;
  }
  hr{
    background-color: #ddd;
  }
</style>
