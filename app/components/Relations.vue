<template lang="html">
  <section class="relations">
    <jumbo></jumbo>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="clearfix">
            <h3 class="float-left">Regions</h3>
            <h5 class="float-right text-warning">
              {{ stations.resourceSelected }}
            </h5>
          </div>
          <regions v-bind:regions="regions.content"
              v-bind:regionSelected="stations.regionSelected"
              v-bind:resourceSelected="stations.resourceSelected"
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
          <stations v-bind:stations="stationsSelected"
            v-on:selectResource="selectResource">
          </stations>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Jumbo from './relations/Jumbo.vue'
import Regions from './relations/Regions.vue'
import Stations from './relations/Stations.vue'
import * as types from 'store/types'

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
    selectRegion(region) {
      this.$store.commit({
        type: types.SELECT_REGION,
        region
      })
    },
    selectResource(resource) {
      this.$store.commit({
        type: types.SELECT_RESOURCE,
        resource
      })
    }
  }
}
</script>

<style lang="css">
</style>
