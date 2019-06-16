const app = new Vue({
    el: '#app',
    data: {
        titulo: 'V-Model',
        mensaje: 'Soy un ciclo de vida',
    },
    methods: {
        destruir() {
            this.$destroy()
        }
    },
    computed: {
    },
    beforeCreated() {
        console.log('BeforeCreated')
    },
    created() {
        // Cuando se ejecutan los eventos, metodos
        // Aun no puede acceder al DOM
        console.log('created')
    },
    beforeMount() {
        // Se ejecuta antes de acceder al DOM
        console.log('BeforeMount')
    },
    mounted() {
        // Se ejecuta al insertar en el DOM
        console.log('mounted')
    },
    beforeUpdate() {
        // Al detectar un cambio
        console.log('beforeUpdated')
    },
    updated() {
        // Al realizar los cambios
        console.log('updated')
    },
    beforeDestroy() {
        // Antes de destruir la instancia
        console.log('beforedDestroy')
    },
    destroyed() {
        //Se destruye toda la instancia
        console.log('destroyed')
    }
})