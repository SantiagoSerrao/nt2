<template>

 <div id="navigator">
            <button id="reset" @click="restart">New colors</button>
            <span id="message"> {{mensajejuego}} </span>
            <button id="easy" v-bind:class="{ selected: !isHard }" @click="easy">easy</button>
            <button id="hard" v-bind:class="{ selected: isHard }" @click="hard">hard</button>
    
  </div>

</template>

<script>

  export default  {
    name: 'src-components-botones',
    props: ['colorJugar','colors', 'mensajejuego'],
    created(){
        this.restart()
    },
    mounted () {

    },
    data () {
      return {
            isHard:true,
            colorCount:6
      }
    },
    methods: {
      easy(){
            if (this.isHard) {
                this.isHard = false;
                this.colorCount = 3;
                this.restart();
            }
        },
        hard(){
            if (!this.isHard) {
                this.isHard = true;
                this.colorCount = 6;
                this.restart();
            }
        },
        restart(){
            this.colors.splice(0, this.colors.length, ...this.createNewColors(this.colorCount));
            let pickedColor = this.colors[this.pickColor()];
            this.colorJugar.r = pickedColor.r;
            this.colorJugar.g = pickedColor.g;
            this.colorJugar.b = pickedColor.b;
        },
        createNewColors(numbers){
            let arr = [];
            for (var i = 0; i < numbers; i++) {
                arr.push(this.createRandomStringColor());
            }
            return arr;
        },
        createRandomStringColor(){
            return {
                r: this.randomInt(),
                g: this.randomInt(), 
                b: this.randomInt()
            };
        }, 
        randomInt(){
            return Math.floor(Math.random() * 256);
        },
        pickColor(){
            let quantity = 3;
            if (this.isHard) {
                quantity = 6;
            }
            return Math.floor(Math.random() * quantity );
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-botones {

  }
</style>
