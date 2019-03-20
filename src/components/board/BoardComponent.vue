<template>
  <div id="board">
    <card-component />
    <transition name="fade-text">
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
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_colors.scss';
  @import '../../assets/styles/vue_elem_transition.scss';

  #board {
    width: 100%;
    background-color: lighten($dark-color, 3);
    display: flex;
  }
</style>
