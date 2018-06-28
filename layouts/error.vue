<template>
  <div class="container">
  	<div>
	    <h1 v-if="error.statusCode === 404">Page not found</h1>
	    <h1 v-else-if="error.statusCode === 403">no auth</h1>
	    <h1 v-else>An error occurred</h1>
	    <div>
	    	<nuxt-link to="/">Home page</nuxt-link>	
	    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
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
