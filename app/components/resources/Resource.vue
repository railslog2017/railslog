<template lang="html">
  <div class="card mb-4">
    <div class="card-block">
      <h4 class="card-title">{{ resource.name }}</h4>

    </div>
    <table class="table">
      <tbody>
        <tr v-for="region in resource.regions">
          <td>{{ region.amount }}</td>
          <td>{{ region.city }}</td>
          <td>{{ region.region }}</td>
        </tr>
        <tr>
          <td>{{ resource.totalAmound }}</td>
          <td colspan="2">Total Amound</td>
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

<style lang="css">
</style>
