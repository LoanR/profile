<template>
  <div id="board-content">
    <card-mutation-links-component
      v-if="currentPagePart.cards.length > 1"
    />
    <section-selector-component
      v-for="(part, i) in boardContentData"
      :key="i"
      :section-content="part"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardMutationLinksComponent from './CardMutationLinksComponent.vue'
import SectionSelectorComponent from './SectionSelectorComponent.vue'

export default {
  components: {
    'card-mutation-links-component': CardMutationLinksComponent,
    'section-selector-component': SectionSelectorComponent
  },

  computed: {
    ...mapGetters(['currentPagePart']),
    boardContentData () {
      return this.currentPagePart.boardSections
    }
  }
}
</script>

<style lang="scss" scoped>
  #board-content {
    width: 50%;
    box-sizing: border-box;
    padding: 0 1rem;
  }
</style>
