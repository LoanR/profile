<template>
  <nav id="secondary-navigation">
    <transition name="swap">
      <ul v-if="showPartLinks">
        <li
          v-for="(link, i) in subParts"
          :key="link.title"
        >
          <secondary-navigation-link-component
            :link="link"
            :index="i"
            :is-selected="partIndex == i"
          />
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import SecondaryNavigationLinkComponent from './SecondaryNavigationLinkComponent.vue'

export default {
  components: {
    'secondary-navigation-link-component': SecondaryNavigationLinkComponent
  },

  computed: {
    ...mapState(['partIndex', 'showPartLinks']),
    subParts () {
      return this.$store.state.pageParts.map(part => {
        return { iconPath: part.subNavIconPath, title: part.subNavTitle }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vue_elem_transition.scss';

  #secondary-navigation {
    background-color: transparent;
    background-repeat: repeat-y;
    width: 50px;
    height: 100%;

    ul, li {
      margin:0;
      padding: 0;
      text-indent: 0;
      list-style-type: none;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
