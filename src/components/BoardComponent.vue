<template>
  <div id="board">
    <card-component :card-content-data="rawSubData.cards[selectedCardIndex]" />
    <board-content-component
      :board-content-data="rawSubData.descriptions"
      :card-selection-title="rawSubData.cardSelectionTitle"
      :card-choices="cardChoices"
      :selected-card-index="selectedCardIndex"
      @selectCard="selectCard"
    />
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
    rawSubData: { type: Object, required: true },
    selectedCardIndex: { type: Number, required: true }
  },

  computed: {
    cardChoices () {
      return this.rawSubData.cards.map(card => card.selectionName)
    }
  },

  methods: {
    selectCard (cardIndex) {
      this.$emit('selectCard', cardIndex)
    }
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
