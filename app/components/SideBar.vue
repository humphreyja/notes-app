/*
  Component: Side Bar
  Params: contacts - required
  Description:
*/

<template>
  <div class="search">
    <input type="text" placeholder="who did I meet yesterday">
  </div>
  <div class="sidebar">
    <ul class="sidebar-contacts">
      <li v-for="contact in contacts" class="sidebar-contact">
        <div class="right-action">

        </div>

        <div class="content">
          <h5>{{ contact.name }}</h5>
        </div>

        <div class="left-action">

        </div>
      </li>
    </ul>
</div>
</template>

<script>
  import { remote } from 'electron'
  import os from 'os'
  export default {
    data () {
      return {
        platform: os.platform(),
        appName: remote.app.getName()
      }
    },
    props: [{
      name: 'contacts'
    }]
  }
</script>

<style lang="scss">
  @import "../assets/variables";

  .search {
    margin-top: 18px;
    display: flex;

    input {
      background: transparent;
      border: 1px solid white;
      width: 100%;
      padding: 4px 8px;
      border-radius: 3px;
      color: white;
      font-size: 14px;
    }
  }

  .side {
    flex: 1;
    padding: 10px;
    background: linear-gradient(to bottom right, rgba(41, 41, 41, 0.92) -5%, rgba(27, 27, 27, 0.95) 39%, rgba(0, 0, 0, 0.86) 84%);
    color: white;
  }

  .sidebar-contacts {
    margin: 0;
    padding: 0;
    list-style: none;

    .sidebar-contact {
      height: 4em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: baseline;
      flex-direction: column;
      justify-content: center;

      &:last-child {
        border-bottom: 0;
      }
    }
  }

</style>
