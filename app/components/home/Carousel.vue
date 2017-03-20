<template lang="html">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0"
          v-bind:class="{ 'active': index == 0}"
          v-on:click.prevent="carousel">
      </li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"
          v-bind:class="{ 'active': index == 1}"
          v-on:click.prevent="carousel">
      </li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"
          v-bind:class="{ 'active': index == 2}"
          v-on:click.prevent="carousel">
      </li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item" v-bind:class="{ 'active': index == 0}">
        <img class="d-block img-fluid first" src="" alt="First slide">
      </div>
      <div class="carousel-item" v-bind:class="{ 'active': index == 1}">
        <img class="d-block img-fluid second" src="" alt="Second slide">
      </div>
      <div class="carousel-item" v-bind:class="{ 'active': index == 2}">
        <img class="d-block img-fluid third" src="" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators"
        role="button" data-slide="prev"
        v-on:click.prevent="prevIndex">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators"
        role="button" data-slide="next"
        v-on:click.prevent="nextIndex">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    }
  },
  methods: {
    prevIndex() {
      this.index != 0 ? this.index-- : this.index = 2
    },
    nextIndex() {
      this.index != 2 ? this.index++ : this.index = 0
    },
    carousel(evt) {
      this.index = evt.target.dataset['slideTo']
    }
  }
}
</script>

<style lang="css">
.carousel {
  background-color: #000000;
}
.first {
  background-image: url(./images/screenshot_0.png);
}
.second {
  background-image: url(./images/screenshot_1.png);
}
.third {
  background-image: url(./images/screenshot_2.png);
}
.carousel-item img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
  width: 100%;
}
</style>
