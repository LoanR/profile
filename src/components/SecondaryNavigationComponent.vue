<template>
  <nav id="secondary-navigation">
    <ul>
      <li
        v-for="(link, i) in subParts"
        :key="i"
      >
        <secondary-navigation-link-component
          :link="link"
          :index="i"
          :is-selected="selectedSubPartIndex == i"
          :show-link="showLink"
          @selectSubPart="selectSubPart"
          @showLinkAgain="showLinkAgain"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import SecondaryNavigationLinkComponent from './SecondaryNavigationLinkComponent.vue'

export default {
  components: {
    'secondary-navigation-link-component': SecondaryNavigationLinkComponent
  },

  props: {
    rawDatas: { type: Array, required: true },
    selectedSubPartIndex: { type: Number, required: true },
    showLink: { type: Boolean, required: true }
  },

  computed: {
    subParts () {
      return this.rawDatas.map(part => {
        return { iconPath: part.subNavIconPath, title: part.subNavTitle }
      })
    }
  },

  methods: {
    selectSubPart (subPartIndex) {
      this.$emit('selectSubPart', subPartIndex)
    },
    showLinkAgain () {
      this.$emit('showLinkAgain')
    }
  }
}
</script>

<style lang="scss" scoped>
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
