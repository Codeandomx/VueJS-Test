const app = new Vue({
    el: '#app',
    data: {
        titulo: 'V-Model',
        frutas: [
            { nombre: 'Platano', cantidad: 4 },
            { nombre: 'Manzana', cantidad: 10 },
            { nombre: 'Mango', cantidad: 23 }
        ],
        nuevafruta: ''
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
    }
})