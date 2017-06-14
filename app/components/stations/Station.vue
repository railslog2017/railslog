<template lang="html">
  <div class="card mb-3">
    <div class="card-header">
      {{ station.region }}
    </div>
    <div class="card-block text-center p-2">
      <h4 class="card-title">{{ station.city }}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <img class="resource pull-right" v-bind:class="station.resourceDemanded.replace(/ /g, '')">
        {{ station.resourceDemanded }} / {{ station.amountDemanded }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['station']
}
</script>

<style lang="css">
</style>
