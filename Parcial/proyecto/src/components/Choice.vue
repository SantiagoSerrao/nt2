<template>

      <div>
          
                
            <div >    
                <div class="table-responsive">
                    <table class="table">
                        <tr class="bg-success text-white">
                            <th>Numero de pregunta</th>
                            <th>Respuesta</th>
                            
                        </tr>
                        <tr class="bg-info text-white" v-for="(pregunta,index) in preguntas" :key="index">
                            <td>{{pregunta.num}}</td>
                            <td>{{pregunta.respuestas}}</td>
                            
                        </tr>
                    </table>
                </div>
              </div>
            
       
       </div>

</template>

<script>

  export default  {
    name: 'src-components-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas : [
            {num: 1, respuestas:['b','d']},
            {num: 2 , respuestas:['b']},
            {num: 3 , respuestas:['c']},
            {num: 4 , respuestas:['d']},
            {num: 5 , respuestas:['b','e']} 
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-choice {

  }
</style>
