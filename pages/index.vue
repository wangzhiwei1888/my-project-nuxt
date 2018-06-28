<template>
  <section class="container">
    <div>
      <!-- <app-logo/> -->
      <h1 class="title">
        my-project-nuxt {{authUser}}
      </h1>
      <button @click="increment">{{ counter }}</button><br>

      <button @click="setuser">setuser</button><br>

      <div class="links">
        <p><nuxt-link to="/user">user</nuxt-link></p>
        <p><nuxt-link to="/user/one">one</nuxt-link></p>
        <p><nuxt-link to="/user/100">user/100</nuxt-link></p>
        <p><nuxt-link to="/user1111">errorlink</nuxt-link></p>
      </div>

    </div>
  </section>
</template>

<script>

import { mapState } from 'vuex'

import AppLogo from '~/components/AppLogo.vue'

export default {
  fetch({ store }) {
    store.commit('increment')
  },
  components: {
    AppLogo
  },
  computed: mapState([
    'counter',
    'authUser'
  ]),
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    setuser(){
      this.$store.commit('setuser',{name:'wzw'});
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  font-size: 32px;
}
</style>
