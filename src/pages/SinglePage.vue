<template>
  <div id="page">
    <div class="navigation-container">
      <main-navigation-component />
    </div>
    <div class="board-container">
      <transition name="slide">
        <div
          v-if="rawDatas.length > 1"
          class="wrapper"
        >
          <secondary-navigation-component />
        </div>
      </transition>
      <board-component />
    </div>
  </div>
</template>

<script>
import BoardComponent from '../components/board/BoardComponent.vue'
import MainNavigationComponent from '../components/main_navigation/MainNavigationComponent.vue'
import SecondaryNavigationComponent from '../components/secondary_navigation/SecondaryNavigationComponent.vue'

export default {
  components: {
    'board-component': BoardComponent,
    'main-navigation-component': MainNavigationComponent,
    'secondary-navigation-component': SecondaryNavigationComponent
  },

  props: { rawDatas: { type: Array, required: true } },

  watch: {
    $route (to, from) {
      this.$store.commit('setPageContent', this.rawDatas)
      this.$store.commit('setDisplayedPartIndex', 0)
      this.$store.commit('setDisplayedCardIndex', 0)
      this.$store.commit('hideBoard')
      this.$store.commit('hideCard')
      this.$store.commit('hidePartLinks')
    }
  },

  created () {
    this.$store.commit('setPageContent', this.rawDatas)
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_transitions.scss';
  @import '../assets/styles/_colors.scss';

  .slide-enter-active, .slide-leave-active {
    transition: all $t-duration $t-timing-function;
    position: relative;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
    width: 0;
  }

  .slide-enter-to, .slide-leave {
    opacity: 1;
    width: 50px;
  }

  #page {
    margin: 0 40px 0;
    width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;

    .navigation-container {
      margin-bottom: 1rem;
    }

    .board-container {
      height: 100%;
      width: 100%;
      display: flex;

      >* {
        margin-top: auto;
        margin-bottom: auto;
        height: 500px;
      }
    }
  }
</style>
