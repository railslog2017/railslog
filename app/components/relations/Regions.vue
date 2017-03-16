<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Resources Sold</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="region in regions">
        <td>
          <button type="button" class="btn btn-outline-success btn-sm"
            v-on:click="selectRegion">
            {{ region.name }}
          </button>
        </td>
        <th>{{ region.resourcesSold }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['regions'],

  methods: {
    selectRegion(evt) {
      let regionName = evt.target.innerText
      this.$emit('selectRegion', regionName)
    }
  }
}
</script>

<style lang="css">
</style>
