<script>
import axios from 'axios'
export default{
  created (){
    const loggedIn = localStorage.getItem('user')
        if (loggedIn){
          const userData = JSON.parse(loggedIn)
          this.$store.commit('SET_USER_DATA',userData)
        
      }
      axios.interceptors.response.use(
        response => response,
        error => {
          if ( error.response.status === 401){
            this.$store.dispatch('logout')
          }
          return Promise.reject(error)
        }
      )
  }
   
}
</script>

<template>
  <navbar v-if="!['Instructor'].includes($route.name)" />
 
  <router-view/>
</template>
<style>
</style>

<script setup>
import navbar from './components/Navbar.vue'
</script>
