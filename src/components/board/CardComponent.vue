<template>
  <div id="card">
    <div class="background-img-container">
      <transition
        name="fade-img"
        @after-leave="showCardAgain"
      >
        <div
          v-if="showCard"
          class="background-img"
          :style="{ backgroundImage: 'url(\'' + currentCard.bgPath + '\')' }"
          alt="bg"
        />
      </transition>
    </div>
    <div class="thumbnail-container">
      <transition
        name="fade-img"
      >
        <img
          v-if="showCard"
          class="thumbnail"
          :src="currentCard.iconPath"
          alt="icon"
        >
      </transition>
    </div>
    <div class="card-presentation-container">
      <div class="card-presentation">
        <transition
          name="fade-text"
        >
          <section-selector-component
            v-if="showCard"
            :section-content="currentCard.section"
            :start-display="currentCard.startDisplay"
            :end-display="currentCard.endDisplay"
            :show-duration="currentCard.showDuration"
            :start="currentCard.start"
            :end="currentCard.end"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SectionSelectorComponent from './SectionSelectorComponent.vue'

export default {
  components: {
    'section-selector-component': SectionSelectorComponent
  },

  computed: {
    ...mapState(['showCard']),
    ...mapGetters(['currentCard'])
  },

  created () {
    document.body.style.setProperty('--primary-color', this.currentCard.primaryColor)
    document.body.style.setProperty('--secondary-color', this.currentCard.secondaryColor)
    document.body.style.setProperty('--light-secondary-color', this.currentCard.lightSecondaryColor)
  },

  methods: {
    showCardAgain () {
      this.$store.dispatch('displayEverything')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_colors.scss';
  @import '../../assets/styles/vue_elem_transition.scss';

  #card {
    position: relative;
    background-color: $light-color;
    left: 0;
    top: -10px;
    overflow: hidden;
    width: 50%;
    height: calc(100% + 20px);
    color: $dark-color;

    .background-img-container {
      width: 100%;
      height: 50%;
      background-color: $dark-color;
      overflow: hidden;

      .background-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: inset 0 -15px 100px $dark-color;
        filter: blur(0.5px);
      }
    }

    .card-presentation-container {
      width: 100%;
      height: 50%;
      display: inline-block;

      .card-presentation {
        padding: 30px 1rem 0 1rem;
      }
    }

    .thumbnail-container {
      background-color: $light-color;
      position: absolute;
      max-width: 80px;
      max-height: 80px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 6px solid $light-color;
      overflow: hidden;

      .thumbnail {
        max-width: 80px;
        display: block;
      }
    }
  }
</style>
