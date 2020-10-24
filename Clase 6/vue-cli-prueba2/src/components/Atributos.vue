<template>

  <section class="src-components-atributos">
   <div class="jumbotron">
    <h2>Directivas de Atributos</h2>
     <h4><u>:Style</u></h4>
                 <br>
                 <button class="btn btn-info my-3" @click= "estado1=!estado1">Cambiar</button>
                <p :style="{color: 'white', backgroundColor:estado1 ?'green':'red', borderRadius : '10px' , 
                padding:'10px'}">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                     Doloremque iusto quibusdam 
                     repudiandae? Eveniet doloribus temporibus illum at delectus. 
                     Nulla doloribus omnis sit, ipsa laudantium nihil ipsam error 
                     aliquid maiores modi.
                 </p>

                 <h4><u>:class</u></h4>
                 <br>
                 <button class="btn btn-info my-3" @click= "estado2=!estado2">Cambiar</button>
                <p :class="{'text-white':estado2,'text-orange': !estado2, 'bg-success':estado2, 'bg-danger': !estado2, 'p-2':true }">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                     Doloremque iusto quibusdam 
                     repudiandae? Eveniet doloribus temporibus illum at delectus. 
                     Nulla doloribus omnis sit, ipsa laudantium nihil ipsam error 
                     aliquid maiores modi.
                 </p>
                 <hr>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-atributos',
    props: [],
    mounted () {

    },
    data () {
      return {
        estado1 : true,
        estado2 : true
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-atributos {

  }
  .jumbotron{
    background-color: rgb(1, 99, 1);
    color: white;
  }
  hr{
    background-color: #ddd;
  }
</style>
