<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Resources Sold</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="region in regions" :key="region.name">
        <td v-bind:class="{ 'table-success': region.name == regionSelected }">
          <button type="button" class="btn btn-outline-success btn-sm"
            v-on:click="selectRegion">
            {{ region.name }}
          </button>
        </td>
        <td v-bind:class="{ 'table-warning': region.resourcesSold.indexOf(resourceSelected) != -1 }">
          {{ region.resourcesSold }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['regions', 'regionSelected', 'resourceSelected'],

  methods: {
    selectRegion(evt) {
      let region = evt.target.innerText
      this.$emit('selectRegion', region)
    }
  }
}
</script>

<style lang="css">
.table td {
  transition: background-color .7s;
}
</style>
