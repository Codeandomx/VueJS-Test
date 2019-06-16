const app = new Vue({
    el: '#app', // Indicamos el elemento principal
    data: { // Datos para trabajar con vue
        titulo: 'Hello world',
        frutas: ['Platano', 'Manzana','Mango'],
        nombres: [
            { nombre: 'Paulo', edad: 30 },
            { nombre: 'Carlos', edad: 23 }
        ]
    }
})