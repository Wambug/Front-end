import { createStore } from 'vuex'
import axios from 'axios'
//import router from '../router'

export default createStore({
  state: {
    user:null,
  },
  mutations: {
    SET_USER_DATA (state,userData){
      state.user = userData
      localStorage.setItem('user',JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.access_token}`
    },
    SEND_USER_DATA (state,userData){
      state.user = userData
    },
    CLEAR_USER_DATA(){
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register({commit},credentials){
      return axios.post('//localhost:8000/user/signup',credentials).then(
        ({data}) => {
          commit('SEND_USER_DATA',data)
        }
      )
    },
    login({commit},credentials){
      return axios
              .post('//localhost:8000/user/login',credentials)
              .then(({data})=>{
                commit('SET_USER_DATA',data)
                console.log(data)
              })
    },
    logout({commit}){
      commit('CLEAR_USER_DATA')
      this.$router.push({ name:'Login'})
    }
  },
  modules: {
  }
})
