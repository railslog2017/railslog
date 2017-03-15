<template lang="html">
  <section class="">
    <jumbo></jumbo>
    <region-list v-bind:regions="regions.content"></region-list>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Jumbo from './regions/Jumbo.vue'
import RegionList from './regions/List.vue'
import * as types from 'store/mutation-types'

export default {
  components: { Jumbo, RegionList },

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
