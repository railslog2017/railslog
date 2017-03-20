<template lang="html">
  <div class="card mb-4">
    <div class="card-block">
      <img class="sprite pull-right" v-bind:class="spriteImg">
      <h4 class="card-title">{{ resource.name }}
      </h4>
    </div>
    <table class="table">
      <tbody>
        <tr v-for="region in resource.regions">
          <td class="text-right">{{ region.amount }}</td>
          <td class="text-center">{{ region.city }}</td>
          <td class="text-left">{{ region.region }}</td>
        </tr>
        <tr>
          <td class="text-right"><strong>{{ resource.totalAmound }}</strong></td>
          <td class="text-center" colspan="2"><strong>Total Amound</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['resource'],
  computed: {
    spriteImg() {
      let name = this.resource.name.replace(' ', '-')
      return `sprite-${name}`
    }
  }
}
</script>

<style lang="css">
.sprite {
  zoom: .4;
}
</style>
