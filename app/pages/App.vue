<template>
  <div id="app">
    <div class="header">
    </div>
    <div class="page">
      <increment></increment>
      <display></display>
    </div>
  </div>
</template>

<script>
  import Display from './Display.vue'
  import Increment from './Increment.vue'
  import store from '../vuex/store' // import the store we just created

  export default {
    components: {
      Display,
      Increment
    },
    store
  }
</script>

<style lang="scss">
  @import "../assets/variables";
  @import "../assets/base";

  html {
    height: 100%;

    body {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
    #app {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .main {
      flex: 2;
      padding: 10px;
      background: rgba(255, 255, 255, 0.98);
    }
  }
</style>
