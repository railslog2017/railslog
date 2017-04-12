<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="station in stations">
        <station v-bind:station="station" key="station._id"></station>
      </div>
    </div>
  </div>
</template>

<script>
import Station from './Station.vue'

export default {
  components: { Station },
  props: ['stations']
}
</script>

<style lang="css">
</style>
