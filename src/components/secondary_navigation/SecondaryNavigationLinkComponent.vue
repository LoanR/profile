<template>
  <button
    :title="link.title"
    :class="{ 'active-secondary-tab': isSelected }"
    @click="selectSubPart"
  >
    <transition
      name="fade-icon"
      @after-leave="showLinkAgain"
    >
      <div v-if="showPartLinks">
        <img
          :src="link.iconPath"
          :alt="link.title"
        >
        <span>{{ link.title }}</span>
      </div>
    </transition>
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    link: { type: Object, required: true },
    index: { type: Number, required: true },
    isSelected: { type: Boolean, required: true }
  },

  computed: {
    ...mapState(['partIndex', 'showPartLinks'])
  },

  created () {
    this.showLinkAgain()
  },

  methods: {
    selectSubPart () {
      if (this.index !== this.partIndex) {
        this.$store.commit('hideBoard')
        this.$store.commit('hideCard')
        this.$store.commit('setDisplayedCardIndex', 0)
        this.$store.commit('setDisplayedPartIndex', this.index)
      }
    },
    showLinkAgain () {
      this.$store.commit('displayPartLinks')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_colors.scss';
  @import '../../assets/styles/_transitions.scss';
  @import '../../assets/styles/vue_elem_transition.scss';

  button {
    border-top: 1px solid;
    border-left: 1px solid;
    border-bottom: 1px solid;
    border-right: none;
    border-radius: 2px 0 0 2px;
    border-color: transparent;
    margin: 0;
    padding: 10px;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    cursor: pointer;
    font-size: xx-small;
    transition: all $t-duration $t-timing-function;
    position: relative;
    display: block;

    img {
      width: 30px;
      height: 30px;
      filter: grayscale(1) contrast(50%);
      transition: all $t-duration $t-timing-function;
      display: block;
    }

    span {
      transition: all $t-duration $t-timing-function;
      color: transparent;
    }

    &:hover {
      span {
        color: $light-color;
        text-shadow: 0 0 1px black, 0 0 2px black, 0 0 4px rgba(0,0,0,0.5);
      }
    }

    &.active-secondary-tab {
      border-color: rgba($light-color, 0.1);
      background-color: rgba($light-color, 0.1);
    }

    &.active-secondary-tab, &:hover {
      img {
        filter: grayscale(0) contrast(1);
      }
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
