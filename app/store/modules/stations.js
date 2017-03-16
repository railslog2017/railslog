import _ from 'underscore'
import API from 'api'
import * as types from 'store/mutation-types'

const state = {
  regionSelected: 'none',
  content: [
    /*
    {
      "city": "Albany",
      "state": "NY",
      "passengers": 10,
      "upgradeCosts": "1,000/5,000/10,000",
      "resourceDemanded": "Lemon",
      "amountDemanded": 50,
      "connectsTo": "Kingston, Montpelier, Harrisburg",
      "region": "USA East",
      "currentAmountDemanded": 0,
      "currentResourceDemanded": false,
      "currentLevel": 0
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
  [types.SELECT_REGION] (state, { regionName }) {
    state.regionSelected = regionName
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
