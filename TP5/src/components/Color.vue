<template>

  <div id="container">
            <div class="square" :style="{'background-color': backgroundColor}" @click="mostrarColor"></div>
  </div>

</template>

<script>

  export default  {
    name: 'src-components-color',
    props: ['color','index','conocerGanador'],
    mounted () {

    },
    data () {
      return {
        backgroundColor: `rgb(${this.color.r},${this.color.g},${this.color.b})`
      }
    },
    methods: {
      mostrarColor(){
            this.colorclickeado= this.color;
            this.conocerGanador(this.colorclickeado, this.index);
        },
        myKey(color){
            const randomNumber = Math.random() * 100000;
            return '' + randomNumber + color.r +color.g +color.b;
        },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-color {

  }
</style>
