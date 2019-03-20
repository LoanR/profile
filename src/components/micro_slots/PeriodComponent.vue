<template>
  <aside>
    <p>
      <span class="period">{{ startDisplay }}</span>
      <span v-if="endDisplay"> • </span>
      <span
        v-if="endDisplay"
        class="period"
      >
        {{ endDisplay }}</span>
      <span v-if="duration">
        ({{ duration }})
      </span>
    </p>
  </aside>
</template>

<script>
import { getDuration } from '../../core/duration.js'

export default {
  props: {
    startDisplay: { type: String, required: true },
    endDisplay: { type: String, default: null },
    showDuration: { type: Boolean, default: true },
    start: { type: String, default: null },
    end: { type: String, default: null }
  },

  computed: {
    duration () {
      if (this.showDuration && this.start && this.end) {
        const dates = getDuration(this.start, this.end, true)
        let years = ''
        if (dates[0] > 0) {
          years = dates[0] + ' an' + (dates[0] > 1 ? 's' : '')
        }
        let months = ''
        if (dates[1] > 0) {
          months = dates[1] + ' mois'
        }
        let separator = ''
        if (years !== '' && months !== '') {
          separator = ' et '
        }
        return years + separator + months
      }
      return null
    }
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
