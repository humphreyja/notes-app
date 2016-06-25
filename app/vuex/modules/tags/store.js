import {
  RECEIVE_CONTACTS
} from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_CONTACTS] (state, contacts) {
    state.all = contacts
  }
}

export default {
  state,
  mutations
}
