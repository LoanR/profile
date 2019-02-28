<template>
  <div class="container">
    <div class="content">
      <h1>
        Hallo {{ name }}!
      </h1>
      <img
        src="../assets/img/vuejs-logo.png"
        alt=""
      >
    </div>
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
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    color: red;

    .content {
      width: 100%;
    }
  }

  img {
    width: 40px;
  }
</style>
