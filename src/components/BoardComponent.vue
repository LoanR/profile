<template>
  <div id="board">
    <card-component :card-content-data="rawSubData.card" />
    <board-content-component :board-content-data="rawSubData.description" />
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue'
import BoardContentComponent from './BoardContentComponent.vue'

export default {
  components: {
    'card-component': CardComponent,
    'board-content-component': BoardContentComponent
  },

  props: {
    rawSubData: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
  #board {
    width: 100%;
    background-color: #d0dbdd;
    position: relative;
  }
</style>
