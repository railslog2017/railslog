import axios from 'axios'

export default {

  getRegions() {
    return axios.get('/api/regions.json')
                .then(response => response.data)
                .catch(error => error)
  }
}
