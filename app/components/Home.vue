<template lang="html">
  <div class="">
    <youtube></youtube>
    <links></links>
    <feature></feature>
  </div>
</template>

<script>
import Youtube from './home/Youtube.vue'
import Links from './home/Links.vue'
import Feature from './home/Feature.vue'

export default {
  components: { Youtube, Links, Feature }
}
</script>

<style lang="css">
</style>
