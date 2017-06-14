import _ from 'underscore'
import API from 'api'
import * as types from 'store/types'

const state = {
  regionSelected: 'none',
  resourceSelected: 'none',
  content: [
    /*
    {
      "city": "Albany, NY",
      "resourceDemanded": "Lemon",
      "amountDemanded": 50,
      "region": "USA East"
    },
    */
  ]
}

const getters = {
  stationsSelected: (state) => {
    return _.filter(state.content, (station) => {
      return station.region == state.regionSelected
    })
  }
}

const actions = {
  [types.FETCH_STATIONS] (context) {
    API.getStations()
      .then(stations => {
        context.commit(types.RECEIVE_STATIONS, { stations })
      })
  }
}

const mutations = {
  [types.RECEIVE_STATIONS] (state, { stations }) {
    state.content = stations.content
  },
  [types.SELECT_REGION] (state, { region }) {
    state.resourceSelected = 'none'
    state.regionSelected = region
  },
  [types.SELECT_RESOURCE] (state, { resource }) {
    state.resourceSelected = resource
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
