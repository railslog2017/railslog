<template lang="html">
  <div class="container">
    <h1>Regions</h1>
    <region-list v-bind:regions="regions.content"></region-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RegionList from './regions/List.vue'
import * as types from 'store/mutation-types'

export default {
  components: { RegionList },

  computed: mapState([
    'regions'
  ]),

  created() {
    this.fetchRegions()
  },

  methods: {
    fetchRegions() {
      if (!this.$store.state.regions.content.length) {
        this.$store.dispatch({
          type: types.FETCH_REGIONS
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
