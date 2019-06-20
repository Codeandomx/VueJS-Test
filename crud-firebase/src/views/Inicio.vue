<template>
  <div>
    <h1>Lista de tareas</h1>

    <router-link :to="{ name: 'agregar' }">
      <button type="button" class="btn btn-success btn-block">Agregar</button>
    </router-link>

    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="(item, index) of tareas" :key="index">
        {{ item.id }} - {{ item.nombre }}
        <div class="float-right">
          <router-link :to="{ name: 'editar', params: { id: item.id } }">
            <button type="button" name="button" class="btn btn-warning btn-sm mr-2">Editar</button>
          </router-link>
          <button type="button" class="btn btn-danger btn-sm" @click="eliminarTarea(item.id)">Eliminar</button>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'

export default {
  name: 'inicio',
  components: {
  },
  methods: {
    ...mapActions(['getTareas','eliminarTarea'])
  },
  computed: {
    ...mapState(['tareas'])
  },
  created(){
    this.getTareas()
  }
}
</script>
