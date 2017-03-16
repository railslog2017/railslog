<template lang="html">
  <div class="card mb-3">
    <div class="card-header">
      {{ station.region }}
    </div>
    <div class="card-block text-center">
      <h4 class="card-title">{{ name }}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <p class="card-text">{{ station.resourceDemanded }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['station'],
  computed: {
    name() {
      return `${this.station.city}, ${this.station.state}`
    }
  }
}
</script>

<style lang="css">
</style>
