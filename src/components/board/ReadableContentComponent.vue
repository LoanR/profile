<template>
  <div class="readable-content">
    <component :is="titleTag">
      {{ titleContent }}
    </component>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="htmlInsert" />
  </div>
</template>

<script>
export default {
  props: {
    partContent: { type: Object, required: true }
  },

  computed: {
    titleTag () {
      return this.partContent.title.tag
    },
    titleContent () {
      return this.partContent.title.content
    },
    htmlInsert () {
      return this.partContent.insert
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
