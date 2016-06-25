import PouchDB from 'pouchdb'
import {loadState} from 'store/actions'

var db = new PouchDB('state')

export default {
  onInit (state, store) {
    db.get('contacts').then(function (loadedState) {
      loadState(store, loadedState)
    }).catch(function (err) {
      console.error(err)
    })
  },
  onMutation (mutation, state, store) {
    console.log('onMutation')
  }
}
