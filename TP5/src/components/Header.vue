<template>

  <div id="header">
		<h1>The Great <br>
			<span id="colorDisplay">rgb({{colorJugar.r}}, {{colorJugar.g}}, {{colorJugar.b}})</span>
			<br>
            Guessing Game
        </h1>
	</div> 

</template>

<script>

  export default  {
    name: 'src-components-header',
    props: ['colorJugar'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-header {

  }
</style>
