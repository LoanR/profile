<template>
  <div id="board">
    <card-component
      :show-card="showCard"
      :card-content-data="rawSubData.cards[selectedCardIndex]"
      @showCardAgain="showCardAgain"
    />
    <transition
      name="fade-text"
      @after-leave="showBoardAgain"
    >
      <board-content-component
        v-if="showBoard"
        :board-content-data="rawSubData.descriptions"
        :card-selection-title="rawSubData.cardSelectionTitle"
        :card-choices="cardChoices"
        :selected-card-index="selectedCardIndex"
        @selectCard="selectCard"
      />
    </transition>
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
    selectedCardIndex: { type: Number, required: true },
    showBoard: { type: Boolean, required: true },
    showCard: { type: Boolean, required: true }
  },

  computed: {
    cardChoices () {
      return this.rawSubData.cards.map(card => card.selectionName)
    }
  },

  methods: {
    selectCard (cardIndex) {
      this.$emit('selectCard', cardIndex)
    },
    showBoardAgain () {
      this.$emit('showBoardAgain')
    },
    showCardAgain () {
      this.$emit('showCardAgain')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_colors.scss';
  @import '../assets/styles/vue_elem_transition.scss';

  #board {
    width: 100%;
    background-color: transparent;
    display: flex;
  }
</style>
