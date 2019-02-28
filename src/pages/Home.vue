<template>
  <div class="application">
    <main-navigation-component />
    <hello-component :name="propTest" />
  </div>
</template>

<script>
import HelloComponent from '../components/HelloComponent.vue'
import MainNavigationComponent from '../components/MainNavigationComponent.vue'

export default {
  components: {
    'hello-component': HelloComponent,
    'main-navigation-component': MainNavigationComponent
  },

  props: { propTest: { type: String, required: true } }
}
</script>

<style lang="scss" scoped>
  .application {
    margin: 0 40px 0;
    width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
