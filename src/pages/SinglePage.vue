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
          <secondary-navigation-component
            :raw-datas="rawDatas"
            :selected-sub-part-index="selectedSubPartIndex"
            :show-link="showLink"
            @selectSubPart="selectSubPart"
            @showLinkAgain="showLinkAgain"
          />
        </div>
      </transition>
      <board-component
        :raw-sub-data="rawDatas[selectedSubPartIndex]"
        :selected-card-index="selectedCardIndex"
        :show-board="showBoard"
        :show-card="showCard"
        @showBoardAgain="showBoardAgain"
        @showCardAgain="showCardAgain"
        @selectCard="selectCard"
      />
    </div>
  </div>
</template>

<script>
import BoardComponent from '../components/BoardComponent.vue'
import MainNavigationComponent from '../components/MainNavigationComponent.vue'
import SecondaryNavigationComponent from '../components/SecondaryNavigationComponent.vue'

export default {
  components: {
    'board-component': BoardComponent,
    'main-navigation-component': MainNavigationComponent,
    'secondary-navigation-component': SecondaryNavigationComponent
  },

  props: { rawDatas: { type: Array, required: true } },

  data () {
    return {
      selectedSubPartIndex: 0,
      selectedCardIndex: 0,
      showBoard: true,
      showCard: true,
      showLink: true
    }
  },

  watch: {
    $route (to, from) {
      this.showBoard = false
      this.showCard = false
      this.showLink = false
      this.selectedSubPartIndex = 0
      this.selectedCardIndex = 0
    }
  },

  methods: {
    selectSubPart (subPartIndex) {
      this.showBoard = false
      this.showCard = false
      this.selectedCardIndex = 0
      this.selectedSubPartIndex = subPartIndex
    },
    selectCard (cardIndex) {
      this.showCard = false
      this.selectedCardIndex = cardIndex
    },
    showBoardAgain () {
      this.showBoard = true
    },
    showCardAgain () {
      this.showCard = true
    },
    showLinkAgain () {
      this.showLink = true
    }
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
