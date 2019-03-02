<template>
  <button
    :title="link.title"
    :class="{ 'active-secondary-tab': isSelected }"
    @click="selectSubPart"
  >
    <img
      :src="link.iconPath"
      :alt="link.title"
    >
  </button>
</template>

<script>
export default {
  props: {
    link: { type: Object, required: true },
    index: { type: Number, required: true },
    isSelected: { type: Boolean, required: true }
  },

  methods: {
    selectSubPart () {
      this.$emit('selectSubPart', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    border: none;
    margin: 10px 0 0 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
      filter: grayscale(1) contrast(50%);
    }

    &.active-secondary-tab img, &:hover img {
      filter: grayscale(0) contrast(1);
    }
  }
</style>
