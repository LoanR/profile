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
        :is-selected="selectedCardIndex == i"
        @selectCard="selectCard"
      />
    </p>
  </div>
</template>

<script>
import CardMutationLinkComponent from './CardMutationLinkComponent.vue'

export default {
  components: {
    'card-mutation-link-component': CardMutationLinkComponent
  },

  props: {
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

</style>
