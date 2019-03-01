<template>
  <div id="board">
    <card-component :card-content-data="rawData.card" />
    <board-content-component :board-content-data="rawData.description" />
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'
import BoardContentComponent from '../components/BoardContentComponent.vue'

export default {
  components: {
    'card-component': CardComponent,
    'board-content-component': BoardContentComponent
  },

  props: {
    rawData: { type: Object, required: true }
  },

  data () {
    return {
      cardData: this.rawData.card,
      boardContentData: this.rawData.description,
      cardTitleTag: this.rawData.card.title.tag,
      cardTitleContent: this.rawData.card.title.content,
      cardtHmlInsert: this.rawData.card.insert
    }
  }
}
</script>

<style lang="scss" scoped>
  #board {
    width: 100%;
    background-color: #63A2AD;
    height: 500px;
    border-radius: 3px;
    position: relative;
  }
</style>
