<template>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/">
        <a class="navbar-brand" href="#">TP6</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/formulario">
              <a class="nav-link" href="#">Formulario de Ingreso</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/datos">
              <a class="nav-link" href="#">Mockapi con los datos</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
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
  .src-components-navbar {

  }
</style>
