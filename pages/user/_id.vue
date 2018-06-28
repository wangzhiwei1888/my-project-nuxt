<template>
  <section class="container">
    <div>
      user _id = {{id}}

      <h1>{{ post.title }}</h1>
      <pre>{{ post.body }}</pre>
      <p><nuxt-link to="/user">Back to the list</nuxt-link></p>

    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return { post: data }
  },
  data(){
    return {
      id:0
    }
  },
  created(){

    this.id = this.$route.params.id;
    // console.log(this)
    // console.log(this.$route.params.id)
  },
  validate ({ params }) {
    // Must be a number
    // console.log(1)
    return /^\d+$/.test(params.id)
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

</style>
