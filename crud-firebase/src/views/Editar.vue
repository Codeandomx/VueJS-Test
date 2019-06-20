<template>
  <div>
    <h1>Editar</h1>

    <form class="form-inline" @submit.prevent="editarTarea(tarea)">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre</div>
        </div>
        <input type="text" class="form-control" v-model="tarea.nombre">
      </div>
      <button type="submit" class="btn btn-primary mb-2">Editar</button>
    </form>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'

export default {
  name: 'editar',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  components: {
  },
  methods: {
    ...mapActions(['getTarea','editarTarea'])
  },
  computed: {
    ...mapState(['tarea'])
  },
  created(){
    this.getTarea(this.id)
  }
}
</script>
