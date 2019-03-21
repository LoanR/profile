<template>
  <component :is="titleTag">
    <slot name="role" />
    <span class="structure">
      <slot name="structure" />
    </span>
  </component>
</template>

<script>
export default {
  props: {
    titleTag: { type: String, required: true }
  }
}
</script>

<style lang="scss">
  .structure {
    opacity: 0.7;
  }
</style>
