import _ from 'underscore'
import API from 'api'
import PouchDB from 'pouchdb-browser'
window.PouchDB = PouchDB

const currentVersionNumber = '0.1.1'
const railsDB = new PouchDB('rails')
const stationsDB = new PouchDB('stations')

checkDB();

function checkDB() {
  console.log('checkDB');
  railsDB.get('version')
    .then(info => {
      if (info.number < currentVersionNumber) {
        updateDB(info, currentVersionNumber)
      }
    })
    .catch(error => insertDB())
}

function insertDB() {
  console.log('insertDB');

  API.getStations()
    .then(stations => {
      let result = _.map(stations.content, (station) => {
        let tempStation = _.pick(station, [
          'city',
          'passengers',
          'upgradeCosts',
          'resourceDemanded',
          'amountDemanded',
          'region',
          'currentAmountDemanded',
          'currentResourceDemanded',
          'currentLevel'
        ])
        tempStation._id = tempStation.city
        return tempStation
      })
      return stationsDB.bulkDocs(result)
    })
    .then(() => {
      var info = {
        _id: 'version',
        number: '0.1.0',
        date: new Date().toISOString()
      }
      railsDB.put(info, function callback(err, result) {
        if (!err) {
          console.log('Successfully posted a todo!')
        }
      })
    })
}

function updateDB(info, version) {
  console.log('updateDB');
  API.getStations()
    .then(stations => {
      let result = _.map(stations.content, (station) => {
        let tempStation = _.pick(station, [
          'city',
          'passengers',
          'upgradeCosts',
          'resourceDemanded',
          'amountDemanded',
          'region'
        ])
        tempStation._id = tempStation.city
        return tempStation
      })
      return stationsDB.bulkDocs(result)
    })
    .then(() => {
      info.number = version
      return railsDB.put(info);
    })
}

export default {

  getVersion: () => (
    railsDB.get('version')
      .then(version => version)
      .catch(error => error)
  ),

  getStations: () => (
    stationsDB.allDocs({include_docs: true})
      .then(docs => _.map(docs.rows, (doc) => doc.doc))
      .catch(error => error)
  ),

  putStation: (station) => (
    stationsDB.put(station)
      .then(doc => doc)
      .catch(error => error)
  )
}
