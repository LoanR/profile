<template>
  <div id="page">
    <div class="navigation-container">
      <main-navigation-component />
    </div>
    <div class="board-container">
      <board-component :raw-data="rawData" />
    </div>
  </div>
</template>

<script>
import BoardComponent from '../components/BoardComponent.vue'
import MainNavigationComponent from '../components/MainNavigationComponent.vue'

export default {
  components: {
    'board-component': BoardComponent,
    'main-navigation-component': MainNavigationComponent
  },

  props: { rawData: { type: Object, required: true } }
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
      flex-direction: column;
      align-items: center;
      justify-content: center;

      color: red;
    }
  }
</style>
