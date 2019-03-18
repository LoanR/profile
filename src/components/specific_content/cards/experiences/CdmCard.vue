<template>
  <readable-content-component>
    <template slot="title">
      <title-component title-tag="h1">
        <template slot="role">
          Chargé de projet événementiel
        </template>
        <template slot="structure">
          <br>
          Cool'eurs du Monde
        </template>
      </title-component>
    </template>
    <template slot="detail">
      <period-component
        start="août 2013"
        end="novembre 2013"
      />
    </template>
    <template slot="content">
      <p>
        Lorem ipsum dolor sit,
        <strong>
          amet
        </strong>
        consectetur adipisicing elit. Quis eum non ipsum
        <em>
          laboriosam
        </em>
        sapiente dolorem culpa fuga ducimus, dolor labore ipsam hic error totam laudantium animi, ad, veritatis maxime assumenda.
      </p>
    </template>
  </readable-content-component>
</template>

<script>
import ReadableContentComponent from '../../../board/ReadableContentComponent.vue'
import TitleComponent from '../../../micro_slots/TitleComponent.vue'
import PeriodComponent from '../../../micro_slots/PeriodComponent.vue'

export default {
  components: {
    'readable-content-component': ReadableContentComponent,
    'title-component': TitleComponent,
    'period-component': PeriodComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
