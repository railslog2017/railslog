<template lang="html">
  <div class="">
    <carousel></carousel>
    <links></links>
    <version></version>
    <feature></feature>
  </div>
</template>

<script>
import Carousel from './home/Carousel.vue'
import Youtube from './home/Youtube.vue'
import Links from './home/Links.vue'
import Version from './home/Version.vue'
import Feature from './home/Feature.vue'

export default {
  components: { Carousel, Youtube, Links, Version, Feature }
}
</script>

<style lang="css">
</style>
