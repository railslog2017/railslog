<template lang="html">
  <div class="card mb-3">
    <div class="card-header">
      {{ station.region }}
    </div>
    <div class="card-block text-center">
      <h4 class="card-title">{{ station.city }}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <p class="card-text">
          Passengers {{ station.passengers }}
        </p>
      </li>
      <li class="list-group-item">
        <p class="card-text">
          {{ station.upgradeCosts }}
        </p>
      </li>
    </ul>
    <div class="card-block text-center">
      <p class="card-text">
        {{ station.resourceDemanded }}
      </p>
      <p class="f">
        {{ station.amountDemanded }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['station']
}
</script>

<style lang="css">
</style>
