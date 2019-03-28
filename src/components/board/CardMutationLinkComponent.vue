<template>
  <span>
    <span
      v-if="index > 0"
      class="subtle"
    >
      •
    </span>
    <a
      :class="{ 'active-mutation-link': isSelected }"
      @click="selectCard"
    >{{ linkContent.title }}<span
      v-if="linkContent.detail"
      class="subtle"
    > - {{ linkContent.detail }}</span></a>
  </span>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  props: {
    index: { type: Number, required: true },
    linkContent: { type: String, required: true },
    isSelected: { type: Boolean, required: true }
  },

  computed: {
    ...mapState(['cardIndex']),
    ...mapGetters(['currentCard'])
  },

  methods: {
    selectCard () {
      if (this.index !== this.cardIndex) {
        this.$store.commit('hideCard')
        this.$store.commit('setDisplayedCardIndex', this.index)
        document.body.style.setProperty('--primary-color', this.currentCard.primaryColor)
        document.body.style.setProperty('--secondary-color', this.currentCard.secondaryColor)
        document.body.style.setProperty('--light-secondary-color', this.currentCard.lightSecondaryColor)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
