import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad: 10},
      { nombre: 'Pera', cantidad: 10},
      { nombre: 'Piña', cantidad: 10},
      { nombre: 'Melon', cantidad: 10},
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++
    },
    reiniciar(state){
      state.frutas.forEach(elemento => 
        elemento.cantidad = 0  
      )
    }
  },
  actions: {

  }
})
