import API from 'api'
import * as types from 'store/types'

const state = {
  content: [
    /*
    {
      "name": "Apple"
      "totalAmound": 150,
      "regions": [
        {
          "amount": 25,
          "city": "Whitehorse, YT",
          "region": "Canada West"
        },
        {
          "Amount Needed": 25,
          "City": "Yorkton, SK",
          "Region": "Canada Center"
        },
        {
          "Amount Needed": 50,
          "City": "Olympia, WA",
          "Region": "USA West"
        },
        {
          "Amount Needed": 50,
          "City": "Topeka, KS",
          "Region": "USA South"
        }
      ]
    }
    */
  ]
}

const getters = {}

const actions = {
  [types.FETCH_RESOURCES] (context) {
    API.getResources()
      .then(resources => {
        context.commit(types.RECEIVE_RESOURCES, { resources })
      })
  }
}

const mutations = {
  [types.RECEIVE_RESOURCES] (state, { resources }) {
    state.content = resources.content
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
