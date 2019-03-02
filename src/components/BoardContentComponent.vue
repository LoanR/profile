<template>
  <div id="board-content">
    <card-mutation-links-component
      v-if="cardChoices.length > 1"
      :card-selection-title="cardSelectionTitle"
      :card-choices="cardChoices"
      :selected-card-index="selectedCardIndex"
      @selectCard="selectCard"
    />
    <readable-content-component
      v-for="(part, i) in boardContentData"
      :key="i"
      :part-content="part"
    />
  </div>
</template>

<script>
import ReadableContentComponent from './ReadableContentComponent.vue'
import CardMutationLinksComponent from './CardMutationLinksComponent.vue'

export default {
  components: {
    'readable-content-component': ReadableContentComponent,
    'card-mutation-links-component': CardMutationLinksComponent
  },

  props: {
    boardContentData: { type: Array, required: true },
    cardSelectionTitle: { type: String, required: true },
    cardChoices: { type: Array, required: true },
    selectedCardIndex: { type: Number, required: true }
  },

  methods: {
    selectCard (cardIndex) {
      this.$emit('selectCard', cardIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
  #board-content {
    position: absolute;
    right: 0;
    left: 50%;
    padding: 0 1rem;
  }
</style>
