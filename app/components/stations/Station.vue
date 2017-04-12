<template lang="html">
  <div class="card mb-3">
    <div class="card-header">
      {{ station.region }}
      <button class="btn btn-sm" v-bind:class="[ isEditMode ? 'btn-outline-success' : 'btn-outline-danger' ]" v-on:click="toogle()">
        {{ isEditMode ? 'Done' :  'Edit' }}
      </button>
    </div>
    <div class="card-block text-center p-2">
      <h4 class="card-title">{{ station.city }}</h4>
      <p class="float-right mb-0">
        Passengers {{ station.passengers }}
      </p>
    </div>
    <table class="table mb-0">
      <tr>
        <td class="p-0">
          <img class="sprite pull-right" v-bind:class="station.resourceDemanded.replace(' ', '')">
        </td>
        <td>{{ station.resourceDemanded }}</td>
        <td v-if="isEditMode">
          <input type="number" v-model="demanded" /> / {{ station.amountDemanded }}
        </td>
        <td v-else>
          {{ station.currentAmountDemanded }} / {{ station.amountDemanded }}
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="progress">
            <div class="progress-bar" role="progressbar" v-bind:style="{width: progress}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ progress }}</div>
          </div>
        </td>
      </tr>
    </table>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <p class="card-text">
          {{ station.upgradeCosts }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'underscore'
import * as types from 'store/types'

export default {
  props: ['station'],

  data() {
    return {
      isEditMode: false,
      demanded: this.station.currentAmountDemanded
    }
  },

  methods: {
    toogle() {
      if (this.isEditMode) {
        let currentAmountDemanded = this.demanded < 0 ? 0 : this.demanded
        this.$store.dispatch({
          type: types.UPDATE_STATION,
          station: {
            _id: this.station._id,
            _rev: this.station._rev,
            currentAmountDemanded
          }
        })
      }
      this.isEditMode = !this.isEditMode
    }
  },

  computed: {
    progress() {
      let numerator = this.station.currentAmountDemanded
      let denominator = this.station.amountDemanded
      numerator = numerator > denominator ? denominator : numerator
      return (numerator / denominator * 100) + '%'
    }
  }
}
</script>

<style lang="css">
</style>
