<template>
  <section class="container">
    <div>
      <h1>user list</h1>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <nuxt-link :to="{ name: 'user-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res)
        return { posts: res.data.slice(0, 10) }
      })
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
