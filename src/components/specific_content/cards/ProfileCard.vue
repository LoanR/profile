<template>
  <readable-content-component>
    <template slot="title">
      <title-component title-tag="h1">
        <template slot="role">
          Développeur web
        </template>
      </title-component>
    </template>
    <template slot="content">
      <p>
        <a
          href="https://github.com/LoanR"
          target="_blank"
        >
          <i class="fab fa-github" />
          github.com/LoanR
        </a>
      </p>
      <p>
        Après plusieurs années d'études en
        <em>
          sciences de l'environnement
        </em>
        et un passé de
        <em>
          médiateur scientifique
        </em>
        , j'exerce aujourd'hui le métier de
        <strong>
          développeur web
        </strong>
        .
      </p>
      <div class="center-content">
        <ul>
          <li>
            <span class="color-hover">
              <img
                class="inline-icon"
                src="static/icons/js-icon.png"
                alt="icon"
              >
              JS
            </span>
            •
            <span class="color-hover">
              <img
                class="inline-icon"
                src="static/icons/sass-icon.png"
                alt="icon"
              >
              SCSS
            </span>
            •
            <span class="color-hover">
              <img
                class="inline-icon"
                src="static/icons/vuejs-icon.png"
                alt="icon"
              >
              Vue.js
            </span>
          </li>
          <li>
            <span class="color-hover">
              <img
                class="inline-icon"
                src="static/icons/python-icon.png"
                alt="icon"
              >
              Python
            </span>
            •
            <span class="color-hover">
              <img
                class="inline-icon"
                src="static/icons/django-icon.png"
                alt="icon"
              >
              django
            </span>
          </li>
          <li>
            <span class="color-hover">
              <img
                class="inline-icon"
                src="static/icons/ruby-icon.png"
                alt="icon"
              >
              Ruby
            </span>
            •
            <span class="color-hover">
              <img
                class="inline-icon"
                src="static/icons/ror-icon.png"
                alt="icon"
              >
              Ruby on Rails
            </span>
          </li>
        </ul>
      </div>
    </template>
  </readable-content-component>
</template>

<script>
import ReadableContentComponent from '../../board/ReadableContentComponent.vue'
import TitleComponent from '../../micro_slots/TitleComponent.vue'

export default {
  components: {
    'readable-content-component': ReadableContentComponent,
    'title-component': TitleComponent
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_transitions.scss';

  ul, li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }

  .center-content {
    display: flex;
    justify-content: center;

    .color-hover {

      .inline-icon {
        max-height: 0.8rem;
        position: relative;
        bottom: -2px;
        transition: all $t-duration $t-timing-function;
        filter: grayscale(1);
      }

      &:hover .inline-icon {
        filter: grayscale(0);
      }
    }
  }
</style>
