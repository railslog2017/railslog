<template lang="html">
  <table class="table table-sm">
    <thead>
      <tr>
        <th>City</th>
        <th>Resource Demanded</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="station in stations" :key="station.city">
        <td>{{ station.city }}</td>
        <td>
          <img class="sprite" v-bind:class="station.resourceDemanded.replace(' ', '')">
          <button type="button" class="btn btn-outline-warning btn-sm"
              v-on:click="selectResource">
            {{ station.resourceDemanded }}
          </button>
        </td>
        <td>{{ station.amountDemanded }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['stations'],

  methods: {
    selectResource(evt) {
      let resource = evt.target.innerText
      this.$emit('selectResource', resource)
    }
  }
}
</script>

<style lang="css">
</style>
