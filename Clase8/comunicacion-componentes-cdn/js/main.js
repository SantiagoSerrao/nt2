Vue.component('Contador',{
    data(){
        return{
            
        }
    },
    props : ['id','color','contadores'],
    methods : {
        contar(){
            this.contadores [this.id]++
        },
        getClassColor(){
            return 'btn-'+this.color
        }
    },
    template : `
            <div style="border:2px solid black;paading:15px;margin-bottom:10px;border-radius:10px;">
                <button :class=" ['btn',getClassColor(),'btn-success','my-3']" 
                @click="contar()">{{id}} {{contadores[id]}}</button>
                <b>{{contadores}}</b>
            </div>    `

})



var app = new Vue({
    el: '#app',
    data:{
        contadores : {cont0:10,cont1:20,cont2:30}
    },
    methods:{
        

    },
    computed : {
        
    }
}) 
