<template>
  <div class="full-width center-content">
    <h1>
      Hallo {{ name }}!
    </h1>
    <img
      src="../assets/img/vuejs-logo.png"
      alt=""
    >
  </div>
</template>

<script>
export default {
  // name: 'Page title',

  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 40px;
}
</style>
