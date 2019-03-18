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
    <div class="card-presentation-container">
      <div class="card-presentation">
        <transition
          name="fade-text"
        >
          <component
            :is="cardContentComponent"
            v-if="showCard"
          />
        </transition>
      </div>
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
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ReadableContentComponent from './ReadableContentComponent.vue'
import ProfileCardComponent from '../specific_content/cards/ProfileCard.vue'
import ActiwineCardComponent from '../specific_content/cards/experiences/ActiwineCard.vue'
import TypetimeCardComponent from '../specific_content/cards/experiences/TypetimeCard.vue'
import CavesCardComponent from '../specific_content/cards/experiences/CavesCard.vue'
import CdmCardComponent from '../specific_content/cards/experiences/CdmCard.vue'
import RadsiCardComponent from '../specific_content/cards/experiences/RadsiCard.vue'
import SemCardComponent from '../specific_content/cards/experiences/SemCard.vue'
import PlasciCardComponent from '../specific_content/cards/experiences/PlasciCard.vue'
import DebsCardComponent from '../specific_content/cards/experiences/DebsCard.vue'
import RobinsCardComponent from '../specific_content/cards/experiences/RobinsCard.vue'
import MondCardComponent from '../specific_content/cards/experiences/MondCard.vue'
import CesiCardComponent from '../specific_content/cards/formations/CesiCard.vue'
import WagonCardComponent from '../specific_content/cards/formations/WagonCard.vue'
import MedenvCardComponent from '../specific_content/cards/formations/MedenvCard.vue'
import LbioCardComponent from '../specific_content/cards/formations/LbioCard.vue'
import AstroCardComponent from '../specific_content/cards/formations/AstroCard.vue'
import GbCardComponent from '../specific_content/cards/formations/GbCard.vue'
import ComposeCardComponent from '../specific_content/cards/hobbies/ComposeCard.vue'
import LuxCardComponent from '../specific_content/cards/hobbies/LuxCard.vue'
import KidaCardComponent from '../specific_content/cards/hobbies/KidaCard.vue'
import SomeCardComponent from '../specific_content/cards/hobbies/SomeCard.vue'
import FlowersCardComponent from '../specific_content/cards/hobbies/FlowersCard.vue'
import PassageCardComponent from '../specific_content/cards/hobbies/PassageCard.vue'
import BladeCardComponent from '../specific_content/cards/hobbies/BladeCard.vue'
import CastleCardComponent from '../specific_content/cards/hobbies/CastleCard.vue'
import SportCardComponent from '../specific_content/cards/hobbies/SportCard.vue'

export default {
  components: {
    'readable-content-component': ReadableContentComponent,
    'profile-card-component': ProfileCardComponent,
    'actiwine-card-component': ActiwineCardComponent,
    'typetime-card-component': TypetimeCardComponent,
    'caves-card-component': CavesCardComponent,
    'cdm-card-component': CdmCardComponent,
    'radsi-card-component': RadsiCardComponent,
    'sem-card-component': SemCardComponent,
    'plasci-card-component': PlasciCardComponent,
    'debs-card-component': DebsCardComponent,
    'robins-card-component': RobinsCardComponent,
    'mond-card-component': MondCardComponent,
    'cesi-card-component': CesiCardComponent,
    'wagon-card-component': WagonCardComponent,
    'medenv-card-component': MedenvCardComponent,
    'lbio-card-component': LbioCardComponent,
    'astro-card-component': AstroCardComponent,
    'gb-card-component': GbCardComponent,
    'compose-card-component': ComposeCardComponent,
    'lux-card-component': LuxCardComponent,
    'kida-card-component': KidaCardComponent,
    'some-card-component': SomeCardComponent,
    'flowers-card-component': FlowersCardComponent,
    'passage-card-component': PassageCardComponent,
    'blade-card-component': BladeCardComponent,
    'castle-card-component': CastleCardComponent,
    'sport-card-component': SportCardComponent
  },

  computed: {
    ...mapState(['showCard']),
    ...mapGetters(['currentCard']),
    cardContentComponent () {
      return this.currentCard.component
    }
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
      }
    }

    .card-presentation-container {
      width: 100%;
      height: 50%;
      display: inline-block;
      padding-top: 30px;

      .card-presentation {
        padding: 0 1rem;
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
