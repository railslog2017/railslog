<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="region in regions">
        <region v-bind:region="region"></region>
      </div>
    </div>
  </div>
</template>

<script>
import Region from './Region.vue'

export default {
  components: { Region },
  props: ['regions']
}
</script>

<style lang="css">
</style>
