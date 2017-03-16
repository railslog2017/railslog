<template lang="html">
  <section class="container">
    <jumbo></jumbo>
    <div class="row">
      <div class="col-md-7">
        <h3>Regions</h3>
        <regions v-bind:regions="regions.content"
          v-on:selectRegion="selectRegion">
        </regions>
      </div>
      <div class="col-md-5">
        <div class="clearfix">
          <h3 class="float-left">Stations</h3>
          <h5 class="float-right text-success">
            {{ stations.regionSelected }}
          </h5>
        </div>
        <stations v-bind:stations="stationsSelected"></stations>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Jumbo from './relations/Jumbo.vue'
import Regions from './relations/Regions.vue'
import Stations from './relations/Stations.vue'
import * as types from 'store/mutation-types'

export default {
  components: { Jumbo, Regions, Stations },

  computed: {
    ...mapState([
      'regions',
      'stations'
    ]),
    ...mapGetters([
      'stationsSelected'
    ])
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      if (!this.$store.state.regions.content.length) {
        this.$store.dispatch({
          type: types.FETCH_REGIONS
        })
      }
      if (!this.$store.state.stations.content.length) {
        this.$store.dispatch({
          type: types.FETCH_STATIONS
        })
      }
    },

    selectRegion(regionName) {
      this.$store.commit({
        type: types.SELECT_REGION,
        regionName
      })
    }
  }
}
</script>

<style lang="css">
</style>
