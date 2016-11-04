export const addNote = ({ dispatch }) => {
  dispatch('INSERT')
}

export const updateNote = ({ dispatch }, e) => {
  dispatch('UPDATE', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE')
}

export const editNoteText = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE_TEXT', e.target.value)
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}

export const syncNotes = ({ dispatch }, notes) => {
  dispatch('SYNC_NOTES', notes)
}

export const notSaved = ({ dispatch }) => {
  dispatch('NOT_SAVED')
}

export const saving = ({ dispatch }) => {
  dispatch('SAVING')
}

export const saved = ({ dispatch }) => {
  dispatch('SAVED')
}
