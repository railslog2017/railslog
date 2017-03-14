<template lang="html">
  <div class="rails-app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './app/Navbar.vue'
import 'template/style.css'

export default {

  components: { Navbar }
}
</script>

<style lang="css">
</style>
