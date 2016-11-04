<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNoteText"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { editNoteText } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      activeNoteText: state => state.activeNote.text
    },
    actions: {
      editNoteText
    }
  }
}
</script>

<style lang="scss">
#note-editor {
height: 100%;
margin-left: 380px;
}

#note-editor textarea {
height: 100%;
border: 0;
border-radius: 0;
}
</style>
