/*
  Component: Contact Icon
  Params: name - required
  Description: Gets the initals of a name and creates an icon for the name
*/

<template>
  <div v-if="initials" class="contact-icon">
    <span class="contact-icon-internal">{{ initials }}</span>
  </div>
</template>

<script>
  import { remote } from 'electron'
  import os from 'os'
  import NameTools from '../assets/functions/name-tools'

  export default {
    data () {
      return {
        platform: os.platform(),
        appName: remote.app.getName()
      }
    },
    props: [{
      name: 'name',
      type: String
    }],
    computed: {
      initials: function () {
        return NameTools.initials(this.name)
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/variables";

  .contact-icon {
    width: 3em;
    height: 3em;
    background: $background-grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    color: $background-grey-opposite;
    font-size: 1.3em;
  }
</style>
