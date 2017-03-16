<template lang="html">
  <div class="">
    <div class="d-flex">
      <button type="button" class="btn btn-secondary w-100"
          v-on:click="selectRegion">
        Canada West
      </button>
      <button type="button" class="btn btn-secondary w-100"
          v-on:click="selectRegion">
        Canada Center
      </button>
      <button type="button" class="btn btn-secondary w-100"
          v-on:click="selectRegion">
        Canada East
      </button>
    </div>
    <div class="d-flex ">
      <button type="button" class="btn btn-secondary w-100"
          v-on:click="selectRegion">
        USA West
      </button>
      <span class="w-100">
        <button type="button" class="btn btn-secondary w-100"
            v-on:click="selectRegion">
          USA Center
        </button>
        <br>
        <button type="button" class="btn btn-secondary w-100"
            v-on:click="selectRegion">
          USA South
        </button>
      </span>
      <button type="button" class="btn btn-secondary w-100"
          v-on:click="selectRegion">
        USA East
      </button>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    selectRegion(evt) {
      let regionName = evt.target.innerText
      this.$emit('selectRegion', regionName)
    }
  }
}
</script>

<style lang="css">
</style>
