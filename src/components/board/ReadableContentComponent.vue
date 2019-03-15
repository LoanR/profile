<template>
  <div class="readable-content">
    <component :is="titleTag">
      {{ titleContent }}
    </component>
    <p
      v-if="precisionContent"
      class="precision-content"
    >
      {{ precisionContent }}
    </p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="htmlInsert" />
  </div>
</template>

<script>
export default {
  props: {
    partContent: { type: Object, required: true }
  },

  computed: {
    titleTag () {
      return this.partContent.title.tag
    },
    titleContent () {
      return this.partContent.title.content
    },
    precisionContent () {
      return this.partContent.precision
    },
    htmlInsert () {
      return this.partContent.insert
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_transitions.scss';
  @import '../../assets/styles/_colors.scss';

  .readable-content {
    .precision-content {
      display: inline;
      background-color: rgba($dark-color, 0.7);
      color: $light-color;
      padding: 2px 6px;
      border-radius: 2px;
    }

    /deep/ {

      ul, li {
        margin: 0;
        padding: 0;
        text-indent: 0;
        list-style-type: none;
      }

      .ul-wrapper {
        display: flex;
        justify-content: center;

        ul {
          width: 160px;
        }
      }

      .inline-icon {
        max-height: 0.8rem;
        position: relative;
        bottom: -2px;
      }

      .color-hover {
        img {
          transition: all $t-duration $t-timing-function;
          filter: grayscale(1);
        }

        &:hover img {
          filter: grayscale(0);
        }
      }
    }
  }
</style>
