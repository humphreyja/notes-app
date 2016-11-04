<template>
  <div id="notification" v-if='message' transition="expand">
    <h5>{{ message }}</h5>
  </div>
  <div></div>
</template>

<script>
export default {
  vuex: {
    getters: {
      saved: state => state.status
    }
  },
  computed: {
    message () {
      switch (this.saved) {
        case 0:
          return
        case 1:
          return 'Saving Note...'
        case 2:
          return 'Note Saved'
        default:
          return
      }
    }
  }
}
</script>

<style lang="scss">
  #notification {
    position: absolute;
    background: rgba(48, 65, 77, 0.52);
    bottom: 0;
    right: 0;
    left: 0;
    width: 30%;
    min-width: 200px;
    margin: 12px auto;
    padding: 1px 8px;
    text-align: center;
    color: white;
    border-radius: 5px;
  }

  /* always present */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
