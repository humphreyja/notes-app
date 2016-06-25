import Mutation from './mutations'

const state = []

const mutations = {
  [Mutation.LOAD_STATE] (state, loaded) {
    state = loaded.contacts
  }
}

export default {
  state, mutations
}
