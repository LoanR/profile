<template>
  <div>
    <router-link :to="path">
      {{ name }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: { path: { type: String, required: true }, name: { type: String, required: true } }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_colors.scss';
  @import '../../assets/styles/vue_nav_link.scss';
</style>
