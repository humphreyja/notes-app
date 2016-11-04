import Dexie from 'dexie'
let db = new Dexie('note-persist')
let timeout = null

export default {
  onInit (state, store) {
    console.log(JSON.stringify(state.activeNote, null, 4))

    db.version(1).stores({
      notes: '++id,text,favorite'
    })

    // Open it
    db.open().then(loadData(store))
  },
  onMutation (mutation, state, store) {
    // mutation.type = mutation name
    // mutation.payload = arguments to mutation
    switch (mutation.type) {
      case 'INSERT':
        startTransaction(insertDB, state.activeNote, store)
        break
      case 'UPDATE':
        delayedTransaction(updateDB, state.activeNote, 5000, store)
        break
      case 'DELETE':
        startTransaction(deleteDB, state.activeNote, store)
        break
      case 'TOGGLE_FAVORITE':
        startTransaction(updateDB, state.activeNote, store)
        break
      case 'EDIT_NOTE_TEXT':
        store.dispatch('UPDATE', state.activeNote)
        break
      case 'SET_ACTIVE_NOTE':
        store.dispatch('NOT_SAVED')
        break
      default:
        console.log(JSON.stringify(state.activeNote, null, 4))
    }
  }
}

function loadData (store) {
  db.notes.toArray(function (notes) {
    return notes
  }).then(function (resolvedNotes) {
    store.dispatch('SYNC_NOTES', resolvedNotes)
  })
}

function startTransaction (dbTransaction, obj, store) {
  console.log('Starting transaction...')
  store.dispatch('SAVING')
  dbTransaction(obj, store)
  store.dispatch('SAVED')
  setTimeout(function () {
    store.dispatch('NOT_SAVED')
    console.log('Transaction complete')
  }, 5000)
}

function delayedTransaction (dbTransaction, obj, time, store) {
  clearTimeout(timeout)
  timeout = setTimeout(function () {
    startTransaction(dbTransaction, obj, store)
  }, time)
}

function insertDB (obj, store) {
  Dexie.spawn(function * () {
    let defaultText = 'New note'
    let id = yield db.notes.add({
      text: defaultText,
      favorite: false
    })
    let note = {
      text: defaultText,
      favorite: false,
      saved: 0,
      id: id
    }
    store.dispatch('PUSH_NOTE', note)
    store.dispatch('SET_ACTIVE_NOTE', note)
  })
}

// Delete from db.
// TODO: Soft delete.  This is a changelist, so only flag it for delete
function deleteDB (obj, store) {
  db.notes.where('id').equals(obj.id).delete()
  store.dispatch('POP_NOTE', obj)
  store.dispatch('SET_ACTIVE_NOTE', null)
}

function updateDB (obj, store) {
  db.notes.where('id').equals(obj.id).modify(
    {
      text: obj.text,
      favorite: obj.favorite
    }
  )
}
