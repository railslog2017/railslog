<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6" v-for="resource in resources">
        <resource v-bind:resource="resource"></resource>
      </div>
    </div>
  </div>
</template>

<script>
import Resource from './Resource.vue'

export default {
  components: { Resource },
  props: ['resources']
}
</script>

<style lang="css">
</style>
