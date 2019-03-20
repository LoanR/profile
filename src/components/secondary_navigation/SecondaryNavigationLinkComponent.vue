<template>
  <button
    :title="link.title"
    :class="{ 'active-secondary-tab': isSelected }"
    @click="selectSubPart"
  >
    <transition name="fade-icon">
      <div>
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
import { mapState, mapGetters } from 'vuex'

export default {
  props: {
    link: { type: Object, required: true },
    index: { type: Number, required: true },
    isSelected: { type: Boolean, required: true }
  },

  computed: {
    ...mapState(['partIndex', 'showPartLinks']),
    ...mapGetters(['currentCard'])
  },

  methods: {
    selectSubPart () {
      if (this.index !== this.partIndex) {
        this.$store.dispatch('hideFromSecondaryMenuClick')
        this.$store.commit('setDisplayedCardIndex', 0)
        this.$store.commit('setDisplayedPartIndex', this.index)
        document.body.style.setProperty('--primary-color', this.currentCard.primaryColor)
        document.body.style.setProperty('--secondary-color', this.currentCard.secondaryColor)
        document.body.style.setProperty('--light-secondary-color', this.currentCard.lightSecondaryColor)
      }
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

    div {
      height: 30px;
      width: 30px;

      img {
        max-width: 30px;
        max-height: 30px;
        filter: grayscale(1) contrast(50%);
        transition: all $t-duration $t-timing-function;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      span {
        transition: all $t-duration $t-timing-function;
        color: transparent;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:focus {
      outline: 0;
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
  }
</style>
