<template>
  <div>
    <h2>
      {{ cardSelectionTitle }}
    </h2>
    <p>
      <card-mutation-link-component
        v-for="(linkContent, i) in cardChoices"
        :key="i"
        :index="i"
        :link-content="linkContent"
        :is-selected="cardIndex == i"
      />
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardMutationLinkComponent from './CardMutationLinkComponent.vue'

export default {
  components: {
    'card-mutation-link-component': CardMutationLinkComponent
  },

  computed: {
    ...mapState(['pageParts', 'partIndex', 'cardIndex']),
    currentPagePart () {
      return this.pageParts[this.partIndex]
    },
    cardChoices () {
      return this.currentPagePart.cards.map(card => card.selectionName)
    },
    cardSelectionTitle () {
      return this.currentPagePart.cardSelectionTitle
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
