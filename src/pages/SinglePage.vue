<template>
  <div id="page">
    <div class="navigation-container">
      <main-navigation-component />
    </div>
    <div class="board-container">
      <secondary-navigation-component
        v-if="rawDatas.length > 1"
        :raw-datas="rawDatas"
        :selected-sub-part-index="selectedSubPartIndex"
        @selectSubPart="selectSubPart"
      />
      <board-component
        :raw-sub-data="rawDatas[selectedSubPartIndex]"
        :selected-card-index="selectedCardIndex"
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
      selectedCardIndex: 0
    }
  },

  watch: {
    $route (to, from) {
      this.selectedSubPartIndex = 0
      this.selectedCardIndex = 0
    }
  },

  methods: {
    selectSubPart (subPartIndex) {
      this.selectedCardIndex = 0
      this.selectedSubPartIndex = subPartIndex
    },
    selectCard (cardIndex) {
      this.selectedCardIndex = cardIndex
    }
  }
}
</script>

<style lang="scss" scoped>
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
        border-radius: 2px;
      }

      color: red;
    }
  }
</style>
