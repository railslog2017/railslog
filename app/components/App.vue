<template lang="html">
  <div class="rails-app">
    <navbar></navbar>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from './app/Navbar.vue'
import Foot from './app/Foot.vue'

export default {
  components: { Navbar, Foot }
}
</script>

<style src="./style.css">
</style>
