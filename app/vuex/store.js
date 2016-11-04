import Vue from 'vue'
import Vuex from 'vuex'
import Persist from './persist'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {},
  status: 0
}

const mutations = {
  INSERT (state) {},
  UPDATE (state, note) {},
  DELETE (state, note) {},

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    if (note === null) {
      state.activeNote = state.notes[0]
    } else {
      state.activeNote = note
    }
  },

  EDIT_NOTE_TEXT (state, text) {
    state.activeNote.text = text
  },

  PUSH_NOTE (state, note) {
    state.notes.push(note)
  },

  POP_NOTE (state, note) {
    state.notes.$remove(note)
  },

  SYNC_NOTES (state, notes) {
    state.notes = notes
  },

  NOT_SAVED (state) {
    state.status = 0
  },

  SAVING (state) {
    state.status = 1
  },

  SAVED (state) {
    state.status = 2
  }
}

export default new Vuex.Store({
  state,
  mutations,
  middlewares: [Persist]
})
