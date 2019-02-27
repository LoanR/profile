<template>
  <div>
    <hello-component name="world" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
  name: 'App',

  components: {
    'hello-component': HelloComponent
  }
}
</script>
