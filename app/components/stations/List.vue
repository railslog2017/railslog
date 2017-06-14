<template lang="html">
  <div class="container">
    <!--
    <div class="row">
      <div class="col-md-4" v-for="station in stations">
        <station v-bind:station="station" key="station._id"></station>
      </div>
    </div>
    -->
    <table class="table table-sm">
      <thead>
        <th>Regions</th>
        <th>City</th>
        <th>ResourceDemanded</th>
      </thead>
      <tbody>
        <Row v-for="station in stations" v-bind:station="station" key="station._id" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Station from './Station.vue'
import Row from './Row.vue'

export default {
  components: { Station, Row },
  props: ['stations']
}
</script>

<style lang="css">
</style>
