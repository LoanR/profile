<template>
  <div id="board-content">
    <card-mutation-links-component
      v-if="currentPagePart.cards.length > 1"
    />
    <readable-content-component
      v-for="(part, i) in boardContentData"
      :key="i"
      :part-content="part"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ReadableContentComponent from './ReadableContentComponent.vue'
import CardMutationLinksComponent from './CardMutationLinksComponent.vue'

export default {
  components: {
    'readable-content-component': ReadableContentComponent,
    'card-mutation-links-component': CardMutationLinksComponent
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
