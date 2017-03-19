import axios from 'axios'

export default {

  getRegions() {
    return axios.get('/api/regions.json')
                .then(response => response.data)
                .catch(error => error)
  },

  getStations() {
    return axios.get('/api/stations.json')
                .then(response => response.data)
                .catch(error => error)
  },

  getResources() {
    return axios.get('/api/resources.json')
                .then(response => response.data)
                .catch(error => error)
  }
}
