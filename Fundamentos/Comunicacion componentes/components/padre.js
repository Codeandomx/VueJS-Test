Vue.component('padre',{
    template: // html
    `
    <div class="p-5 bg-dark text-white">
        <h1>Componente padre: {{ numeroPadre }}</h1>
        <h4>{{ datoPadre }}</h4>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        <hijo :numero="numeroPadre" @nombreHijo="datoPadre = $event"></hijo>
    </div>
    `,
    data(){
        return {
            mensaje: 'Componentes basicos',
            numeroPadre: 0,
            datoPadre: ''
        }
    }
})