const app = new Vue({
    el: '#app',
    data: {
        titulo: 'V-Model',
        frutas: [
            { nombre: 'Platano', cantidad: 4 },
            { nombre: 'Manzana', cantidad: 10 },
            { nombre: 'Mango', cantidad: 23 }
        ],
        nuevafruta: '',
        total: 0
    },
    methods: {
        // agregarFruta (){}
        agregarFruta (){
            let thisIns = this
            console.log('OK')

            // Agregamos
            thisIns.frutas.push({
                nombre: thisIns.nuevafruta,
                cantidad: 0
            })

            // Limpiamos
            thisIns.nuevafruta = ''
        }
    },
    computed: {
        sumarFrutas(){
            let thisIns = this
            
            thisIns.total = 0

            for(fruta of thisIns.frutas){
                thisIns.total += fruta.cantidad
            }

            return thisIns.total
        }
    }
})