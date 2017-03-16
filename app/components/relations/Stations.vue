<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th>City, State</th>
        <th>Resource Demanded</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="station in stations" :key="station.city">
        <td>{{ station.city }}, {{ station.state }}</td>
        <td>
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
