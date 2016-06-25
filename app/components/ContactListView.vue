/*
  Component: Contact List View
  Params: contact - required
  Description: List of contacts
*/

<template>
  <li v-if="contact" class="contact-list-view">
    <div class="contact-list-view-right-action">

    </div>

    <div class="contact-list-view-content">
      <h5>{{ contact.name }}</h5>
    </div>

    <div class="contact-list-view-left-action">

    </div>
  </li>
</template>

<script>
  import { remote } from 'electron'
  import os from 'os'

  export default {
    data () {
      return {
        platform: os.platform(),
        appName: remote.app.getName(),
        contact: {
          name: 'Jake Humphrey',
          number: '7153380283',
          email: 'jakehumphrey18@gmail.com'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/variables";

</style>
