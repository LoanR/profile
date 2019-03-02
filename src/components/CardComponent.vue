<template>
  <div id="card">
    <div class="background-img-container">
      <div
        class="background-img"
        :style="{ backgroundImage: 'url(\'' + cardContentData.bgPath + '\')' }"
        alt="bg"
      />
      <img
        class="thumbnail"
        :src="iconPath"
        alt="icon"
      >
    </div>
    <div class="card-presentation">
      <readable-content-component
        :part-content="cardContentData"
      />
    </div>
  </div>
</template>

<script>
import ReadableContentComponent from './ReadableContentComponent.vue'

export default {
  components: {
    'readable-content-component': ReadableContentComponent
  },

  props: {
    cardContentData: { type: Object, required: true }
  },

  computed: {
    iconPath () {
      return this.cardContentData.iconPath
    }
  }
}
</script>

<style lang="scss" scoped>
  #card {
    position: absolute;
    background-color: white;
    left: 0;
    right: 50%;
    top: -10px;
    bottom: -10px;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);

    .background-img-container {
      width: 100%;
      height: 50%;
      background-color: black;
      margin-bottom: 47px;

      .background-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: contrast(70%);
      }
    }

    .thumbnail {
      max-width: 80px;
      max-height: 80px;
      position: relative;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow:
        0 0 5px 1px rgba(0,0,0,0.3),
        0 0 0 7px white;
    }

    .card-presentation {
      padding: 0 1rem;
    }

  }
</style>
