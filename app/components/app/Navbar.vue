<template lang="html">
  <div class="container">
    <nav class="navbar navbar-toggleable-md navbar-light px-0">
      <button class="navbar-toggler navbar-toggler-right" type="button"
          data-toggle="collapse" data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation" v-on:click="toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand">
        Tiny Rails Log
      </router-link>
      <div class="collapse navbar-collapse" v-bind:class="{ 'show': show }" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <router-link tag="li" to="/relations" class="nav-item" active-class="active">
            <a class="nav-link">Relations</a>
          </router-link>
          <router-link tag="li" to="/regions" class="nav-item" active-class="active">
            <a class="nav-link">Regions</a>
          </router-link>
          <router-link tag="li" to="/stations" class="nav-item" active-class="active">
            <a class="nav-link">Stations</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

  data() {
    return {
      show: false
    }
  },

  methods: {
    toggleNav() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="css">
</style>
