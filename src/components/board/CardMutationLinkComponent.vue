<template>
  <span>
    <span v-if="index > 0">
      •
    </span>
    <a
      :class="{ 'active-mutation-link': isSelected }"
      @click="selectCard"
    >{{ linkContent }}</a>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    index: { type: Number, required: true },
    linkContent: { type: String, required: true },
    isSelected: { type: Boolean, required: true }
  },

  computed: {
    ...mapState(['cardIndex'])
  },

  methods: {
    selectCard () {
      if (this.index !== this.cardIndex) {
        this.$store.commit('hideCard')
        this.$store.commit('setDisplayedCardIndex', this.index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
