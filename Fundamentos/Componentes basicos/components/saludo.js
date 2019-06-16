Vue.component('saludo',{
    template: // html
    `
    <div>
        <h1>{{ mensaje }}</h1>
        <h3>{{ texto }}</h3>
    </div>
    `,
    data(){
        return {
            mensaje: 'Componentes basicos',
            texto: 'Otro texto'
        }
    }
})