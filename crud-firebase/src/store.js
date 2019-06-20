import Vue from 'vue'
import Vuex from 'vuex'
// Importamos firebase
import db from './firebase.config'
// Importamos el router
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [], // Almacena las tareas
    tarea: { nombre: '', id: '' }
  },
  mutations: {
    // Asignamos las tareas de firebase al state
    setTareas(state, tareas){
      state.tareas = tareas
    },
    setTarea(state, tarea){
      state.tarea = tarea
    },
    eliminarTarea(state, id){
      state.tareas = state.tareas.filter( doc => {
        return doc.id != id 
      })
    }
  },
  actions: {
    // Obtenemos la coleccion desde base de datos
    getTareas({commit}){
      const tareas = []

      db.collection('tareas').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.id)
          // console.log(doc.data())

          // Creamos un nobjeto
          let tarea = doc.data()
          tarea.id = doc.id

          // Agregamos la tarea
          tareas.push(tarea)
        })
      })

      commit('setTareas', tareas)
    },
    getTarea({commit}, id){
      db.collection('tareas').doc(id).get()
      .then(doc => {
        let tarea = doc.data()
        tarea.id = doc.id

        commit('setTarea', tarea)
      })
    },
    editarTarea({commit}, tarea){
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
      .then(() => {
        router.push({ name: 'inicio' })
      })
    },
    agregarTarea({commit}, nombre){
      db.collection('tareas').add({
        nombre: nombre
      })
      .then(doc => {
        console.log(doc.id) // Obtenemos el ID creado
        router.push({ name: 'inicio' })
      })
    },
    eliminarTarea({commit, dispatch}, id){
      db.collection('tareas').doc(id).delete()
      .then(() => {
        console.log('tarea eliminada')
        // dispatch('getTareas')
        commit('eliminarTarea', id)
      })
    }
  }
})
