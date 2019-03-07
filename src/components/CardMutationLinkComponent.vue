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
export default {
  props: {
    index: { type: Number, required: true },
    linkContent: { type: String, required: true },
    isSelected: { type: Boolean, required: true }
  },

  methods: {
    selectCard () {
      this.$emit('selectCard', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
