const app = new Vue({
    el: '#app',
    data: {
        titulo: 'V-Model',
        mensaje: 'Hola',
        contador: 0
    },
    methods: {
        
    },
    computed: {
        invertido(){
            let thisIns = this
            return thisIns.mensaje.split('').reverse().join('')
        },
        color () {
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >=20
            }
        }
    }
})