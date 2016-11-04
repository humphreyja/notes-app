<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
    <notification></notification>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import NotesList from './NotesList.vue'
import Editor from './Editor.vue'
import Notification from './Notification.vue'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor,
    Notification
  }
}
</script>

<style lang="scss">
  @import "../assets/variables";
  @import "../assets/base";
</style>
