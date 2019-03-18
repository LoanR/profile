<template>
  <aside>
    <p>
      <span class="period">{{ start }}</span>
      <span v-if="end"> • </span>
      <span
        v-if="end"
        class="period"
      >
        {{ end }}</span>
    </p>
  </aside>
</template>

<script>
export default {
  props: {
    start: { type: String, required: true },
    end: { type: String, default: null }
  }
}
</script>

<style lang="scss">
  @import '../../assets/styles/_colors.scss';

  .period {
    display: inline;
    background-color: rgba($dark-color, 0.7);
    color: $light-color;
    padding: 2px 6px;
    border-radius: 2px;
  }
</style>
