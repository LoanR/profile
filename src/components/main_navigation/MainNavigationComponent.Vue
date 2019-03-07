<template>
  <nav>
    <ul class="home-navigation">
      <li>
        <home-navigation-link-component
          :path="home.path"
          :name="home.displayTitle"
        />
      </li>
      <li class="pages-navigation">
        <ul class="section-navigation">
          <li
            v-for="(l, i) in pages"
            :key="i"
          >
            <section-navigation-link-component
              :path="l.path"
              :name="l.displayTitle"
            />
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import HomeNavigationLinkComponent from './HomeNavigationLinkComponent.vue'
import SectionNavigationLinkComponent from './SectionNavigationLinkComponent.vue'
import { HOME_DATA, PAGES_DATA } from '../../content/data.js'

export default {
  components: {
    'home-navigation-link-component': HomeNavigationLinkComponent,
    'section-navigation-link-component': SectionNavigationLinkComponent
  },

  // props: { pages: { type: Array, required: true } },

  data () {
    return {
      home: HOME_DATA,
      pages: PAGES_DATA
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_colors.scss';

  nav {
    color: $light-color;
    margin-top: 0.5rem;

    ul, li {
      margin:0;
      padding: 0;
      text-indent: 0;
      list-style-type: none;
    }

    .home-navigation {
      display: flex;
      justify-content: space-between;

      .pages-navigation {
        width: 50%;

        .section-navigation {
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
</style>
