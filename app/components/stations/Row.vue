<template lang="html">
  <tr>
    <td>{{ station.region }}</td>
    <td>{{ station.city }}</td>
    <td>
      <img class="resource pull-right" v-bind:class="station.resourceDemanded.replace(/ /g, '')">
      {{ station.resourceDemanded }} / {{ station.amountDemanded }}
    </td>
  </tr>
</template>

<script>
export default {
  props: ['station']
}
</script>

<style lang="css">
</style>
