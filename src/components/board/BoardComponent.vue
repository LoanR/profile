<template>
  <div id="board">
    <card-component />
    <transition
      name="fade-text"
      @after-leave="showBoardAgain"
    >
      <board-content-component
        v-if="showBoard"
      />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from './CardComponent.vue'
import BoardContentComponent from './BoardContentComponent.vue'

export default {
  components: {
    'card-component': CardComponent,
    'board-content-component': BoardContentComponent
  },

  computed: {
    ...mapState(['showBoard'])
  },

  methods: {
    showBoardAgain () {
      this.$store.commit('displayBoard')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_colors.scss';
  @import '../../assets/styles/vue_elem_transition.scss';

  #board {
    width: 100%;
    background-color: transparent;
    display: flex;
  }
</style>
