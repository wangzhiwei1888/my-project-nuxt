import Vuex from 'vuex'

// import mutations from './mutations'


const mutations = {
  increment(state) {
    state.counter++
  },
  setuser(state,user) {
    state.authUser = user;
  }
}



// export default mutations

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      authUser:null
    },
    mutations
  })
}

export default createStore
