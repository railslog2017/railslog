import _ from 'underscore'
import API from 'api'
import * as types from 'store/mutation-types'

const state = {
  content: [
    /*
    {
      "name": "USA East",
      "stations": 21,
      "totalDistance": 11054,
      "resourcesSold": "Honey, Paper, Pizza, Salmon, Steel, Strawberry, Wood, Onion"
    },
    */
  ]
}

const getters = {
}

const actions = {
  [types.FETCH_REGIONS] (context) {
    API.getRegions()
      .then(regions => {
        context.commit(types.RECEIVE_REGIONS, { regions })
      })
  }
}

const mutations = {
  [types.RECEIVE_REGIONS] (state, { regions }) {
    state.content = regions.content
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
