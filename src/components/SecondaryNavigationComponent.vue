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
          :is-selected="subNavIndex == i"
          @selectSubPart="selectSubPart"
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
    subNavIndex: { type: Number, required: true }
  },

  computed: {
    subParts () {
      return this.rawDatas.map(part => {
        return { iconPath: part.subNavIconPath, title: part.subNavTitle }
      })
    }
  },

  methods: {
    selectSubPart (subPartId) {
      this.$emit('selectSubPart', subPartId)
    }
  }
}
</script>

<style lang="scss" scoped>
  #secondary-navigation {
    background-color: #d0dbdd;
    margin-right: 16px;
    width: 50px;

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
