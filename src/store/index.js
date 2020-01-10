import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    acount: 0
  },
  mutations: {
    add: (state) => {
      state.acount++
    },
    addN: (state, setp) => {
      state.acount += setp
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit('addN', 100)
      }, 1000)
    }
  },
  getters: {
    showANum: (state) => {
      return `当前A最新数量是:[${state.acount}]`
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    count: 999
  },
  mutations: {
    sub: (state) => {
      state.count--
    },
    subN: (state, setp) => {
      state.count -= setp
    }
  },
  actions: {
    subAsync(context) {
      setTimeout(() => {
        context.commit('subN', 100)
      }, 1000)
    }
  },
  getters: {
    showNum: (state) => {
      return `当前B最新数量是:[${state.count}]`
    }
  }
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
