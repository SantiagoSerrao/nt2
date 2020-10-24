<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a vue.JS CLI</h1>
      <br>
      <Binding />
      <Estructura/>
      <Atributos/>
      <Contador init="123" color="danger"></Contador>
      <Contador init="456" color="warning"></Contador>
      <Contador init="789" color="success"></Contador>
      
    </div> 
  </div>
</template>

<script>

import Binding from './components/Binding.vue'
import Contador from './components/contador/index.vue'
import Estructura from './components/Estructura.vue'
import Atributos from './components/Atributos.vue'

export default {
  name: 'App',
  components: {
    Binding,
    Contador,
    Estructura,
    Atributos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 h1 {
    color: blue;
  }
</style>
