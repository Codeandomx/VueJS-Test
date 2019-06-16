Vue.component('hijo',{
    template: // html
    `
    <div class="p-5 bg-success">
        <h4>componente hijo: {{ numero }}</h4>
        <h4>Nombre: {{ nombre }}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return {
            nombre: 'Paulo'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre)
    }
})