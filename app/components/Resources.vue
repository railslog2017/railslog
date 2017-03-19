<template lang="html">
  <section class="resources">
    <jumbo></jumbo>
    <resource-list v-bind:resources="resources.content"></resource-list>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Jumbo from './resources/Jumbo.vue'
import ResourceList from './resources/List.vue'
import * as types from 'store/types'

export default {
  components: { Jumbo, ResourceList },

  computed: mapState([
    'resources'
  ]),

  created() {
    this.fetchResources()
  },

  methods: {
    fetchResources() {
      if (!this.$store.state.resources.content.length) {
        this.$store.dispatch({
          type: types.FETCH_RESOURCES
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
