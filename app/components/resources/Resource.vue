<template lang="html">
  <div class="card mb-4">
    <div class="card-block">
      <img class="resource pull-right" v-bind:class="resource.name.replace(/ /g, '')">
      <h4 class="card-title">{{ resource.name }}
      </h4>
    </div>
    <table class="table">
      <tbody>
        <tr v-for="region in resource.regions">
          <td class="text-right">{{ region.amount }}</td>
          <td class="text-center">{{ region.city }}</td>
          <td class="text-left">{{ region.region }}</td>
        </tr>
        <tr>
          <td class="text-right"><strong>{{ resource.totalAmound }}</strong></td>
          <td class="text-center" colspan="2"><strong>Total Amound</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['resource']
}
</script>

<style src="./resources.css">
</style>
