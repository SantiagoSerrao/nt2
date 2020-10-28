export default {
    methods:{
        formatearFecha : function (fyh){
         return new Date(fyh).toLocaleString()
        },
        agregarSigno : function (monto){
            return "$ " + monto
        }
    }
}
