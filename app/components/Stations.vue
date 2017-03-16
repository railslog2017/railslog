<template lang="html">
  <section class="stations">
    <jumbo></jumbo>
    <station-list v-bind:stations="stations.content"></station-list>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Jumbo from './stations/Jumbo.vue'
import StationList from './stations/List.vue'
import * as types from 'store/types'

export default {
  components: { Jumbo, StationList },

  computed: mapState([
    'stations'
  ]),

  created() {
    this.fetchStations()
  },

  methods: {
    fetchStations() {
      if (!this.$store.state.stations.content.length) {
        this.$store.dispatch({
          type: types.FETCH_STATIONS
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
