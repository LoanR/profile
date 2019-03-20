<template>
  <section class="readable-content">
    <header>
      <slot name="title" />
      <slot name="detail" />
    </header>
    <article>
      <slot name="content" />
    </article>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
