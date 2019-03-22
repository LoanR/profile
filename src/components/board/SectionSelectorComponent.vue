<template>
  <readable-content-component>
    <template
      v-if="sectionContent.title"
      slot="title"
    >
      <title-component :title-tag="sectionContent.title.tag">
        <template slot="role">
          <a
            v-if="!sectionContent.title.precision && sectionContent.title.link"
            :href="sectionContent.title.link"
            target="_blank"
          >
            {{ sectionContent.title.main }}
          </a>
          <span v-else>
            {{ sectionContent.title.main }}
          </span>
        </template>
        <template
          v-if="sectionContent.title.precision"
          slot="structure"
        >
          <br>
          <a
            v-if="sectionContent.title.link"
            :href="sectionContent.title.link"
            target="_blank"
          >
            {{ sectionContent.title.precision }}
          </a>
          <span v-else>
            {{ sectionContent.title.precision }}
          </span>
        </template>
      </title-component>
    </template>
    <template
      v-if="startDisplay"
      slot="detail"
    >
      <period-component
        :start-display="startDisplay"
        :end-display="endDisplay"
        :show-duration="showDuration"
        :start="start"
        :end="end"
      />
    </template>
    <template slot="content">
      <component :is="sectionContent.component" />
    </template>
  </readable-content-component>
</template>

<script>
import ReadableContentComponent from '../micro_slots/ReadableContentComponent.vue'
import TitleComponent from '../micro_slots/TitleComponent.vue'
import PeriodComponent from '../micro_slots/PeriodComponent.vue'
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
import ProfileBoard1Component from '../specific_content/boards/ProfileBoard1.vue'
import ActiwineBoardEnvironmentComponent from '../specific_content/boards/experiences/ActiwineBoardEnvironment.vue'
import ActiwineBoardRealisationsComponent from '../specific_content/boards/experiences/ActiwineBoardRealisations.vue'
import TypetimeBoardStackComponent from '../specific_content/boards/experiences/TypetimeBoardStack.vue'
import TypetimeBoardOperationComponent from '../specific_content/boards/experiences/TypetimeBoardOperation.vue'
import TypetimeBoardTodoComponent from '../specific_content/boards/experiences/TypetimeBoardTodo.vue'

export default {
  components: {
    'readable-content-component': ReadableContentComponent,
    'title-component': TitleComponent,
    'period-component': PeriodComponent,
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
    'sport-card-component': SportCardComponent,
    'profile-board-1-component': ProfileBoard1Component,
    'actiwine-board-environment-component': ActiwineBoardEnvironmentComponent,
    'actiwine-board-realisations-component': ActiwineBoardRealisationsComponent,
    'typetime-board-stack-component': TypetimeBoardStackComponent,
    'typetime-board-operation-component': TypetimeBoardOperationComponent,
    'typetime-board-todo-component': TypetimeBoardTodoComponent
  },

  props: {
    sectionContent: { type: Object, required: true },
    startDisplay: { type: String, default: null },
    endDisplay: { type: String, default: null },
    showDuration: { type: Boolean, default: true },
    start: { type: String, default: null },
    end: { type: String, default: null }
  }
}
</script>
