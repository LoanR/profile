<template>
  <div id="page">
    <div class="navigation-container">
      <main-navigation-component />
    </div>
    <div class="board-container">
      <secondary-navigation-component
        v-if="rawDatas.length > 1"
        :raw-datas="rawDatas"
        :sub-nav-index="subNavIndex"
        @selectSubPart="selectSubPart"
      />
      <board-component :raw-sub-data="rawDatas[subNavIndex]" />
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
      subNavIndex: 0
    }
  },

  watch: {
    $route (to, from) {
      this.subNavIndex = 0
    }
  },

  methods: {
    selectSubPart (subPartId) {
      this.subNavIndex = subPartId
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
