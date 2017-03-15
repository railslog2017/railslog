<template lang="html">
  <div class="card mb-3">
    <div class="card-header">
      {{ region.continent }}
    </div>
    <div class="card-block">
      <h4 class="card-title">{{ region.regionName }}</h4>
      <p class="card-text">{{ info }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <p class="card-text">{{ region.resourcesSold }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['region'],
  computed: {
    info() {
      return `Stations ${this.region.stations}, ${this.region.totalDistance} km`
    }
  }
}
</script>

<style lang="css">
</style>
