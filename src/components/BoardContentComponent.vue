<template>
  <div id="board-content">
    <readable-content-component
      v-for="(part, i) in boardContentData"
      :key="i"
      :part-content="part"
    />
  </div>
</template>

<script>
import ReadableContentComponent from '../components/ReadableContentComponent.vue'

export default {
  components: {
    'readable-content-component': ReadableContentComponent
  },

  props: {
    boardContentData: { type: Array, required: true }
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
