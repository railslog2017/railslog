<template lang="html">
  <nav class="navbar navbar-toggleable-md navbar-light">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand">
        Rails Log
      </router-link>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <router-link tag="li" to="/regions" class="nav-item" active-class="active">
            <a class="nav-link">Regions</a>
          </router-link>
          <router-link tag="li" to="/stations" class="nav-item" active-class="active">
            <a class="nav-link">Stations</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
