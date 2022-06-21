import Vue from 'vue'
import Vuex from 'vuex'
import userPage from '@/store/userPage'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    userPage
  }
})

