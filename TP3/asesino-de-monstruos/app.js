new Vue({
    el: '#app',
    data: {
        saludJugador: 100,
        saludMonstruo: 100,
        hayUnaPartidaEnJuego: false,
        turnos: [], //es para registrar los eventos de la partida
        esJugador: false,
        rangoAtaque: [3, 10],
        rangoAtaqueEspecial: [10, 20],
        rangoAtaqueDelMonstruo: [5, 12],
    },

    methods: {
        getSalud(salud) {
            return `${salud}%`
        },
        empezarPartida: function () {
            this.hayUnaPartidaEnJuego= true
            this.saludJugador=100
            this.saludMonstruo=100
            this.turnos= [];
        },
        atacar: function () {
            var danio= this.calcularHeridas(3, 10)
            this.saludMonstruo -= danio
            let evento = {
                esJugador:true,
                text:`EL JUGADOR GOLPEA AL MONSTRUO POR ${danio}`
            }
            this.registrarEvento(evento);
            if (this.verificarGanador()){
                return;
            }
            // cuando atacas tambien recibis un ataque del mounstro
            this.ataqueDelMonstruo();
        },

        ataqueEspecial: function () {
            var danioEspecial = this.calcularHeridas(10, 20);
            this.saludMonstruo -= danioEspecial
            let evento = {
                esJugador:true,
                text:`EL JUGADOR GOLPEA AL MONSTRUO POR ${danioEspecial}`
            }
            this.registrarEvento(evento);
            if (this.verificarGanador()){
                return;
            }
            // cuando haces un ataque especial tambien recibis un ataque 
            this.ataqueDelMonstruo();
        },

        curar: function () {
            if(this.saludJugador <= 90){
                this.saludJugador += 10
                this.turnos.unshift({
                    esJugador:true,
                    text:'EL JUGADOR SE CURA UN 10%'
                });
            }else {
                this.saludJugador =100
            }
            // cuando te curas recibis un ataque tambien
            this.ataqueDelMonstruo();
        },

        registrarEvento(evento) {
            // cada vez que hace algo es un evento! aca hay que hacer el agregar al array
            this.turnos.unshift(evento);
        },
        terminarPartida: function () {
            this.hayUnaPartidaEnJuego=false;
            this.saludJugador=100;
            this.saludMonstruo=100;
            this.turnos= [];
        },

        ataqueDelMonstruo: function () {
            var danioMostruo = this.calcularHeridas(5, 12)
            this.saludJugador -= danioMostruo
            let evento = {
                esJugador:false,
                text:`EL MONSTRUO GOLPEA AL JUGADOR POR ${ataqueAJugador}`
            };
            this.verificarGanador();
        },

        calcularHeridas: function (min,max) {
            
            return Math.max(Math.floor(Math.random() * max + 1 , min))
            

        },
        verificarGanador: function () {
            if (this.saludMonstruo<=0){
                    if(confirm('Ganaste!!!! Jugamos de nuevo??')){
                    this.empezarPartida();
                    }else {
                this.hayUnaPartidaEnJuego=false;
                    }
                return true;
            } else if (this.saludJugador<=0){
                if(confirm('Perdiste!!:( Jugamos de nuevo??')){
                this.empezarPartida();
                }else{
                this.hayUnaPartidaEnJuego=false;
                }
                return true
            }
            return false;
        },
        cssEvento(turno) {
            //Este return de un objeto es prque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible en el codigo HTML.
         

            
            return {
                'player-turno': turno.esJugador,
                'monster-turno': !turno.esJugador
            }
        }
    }
});