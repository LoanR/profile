<template>
  <div>
    <p class="identity">
      <i class="fas fa-hourglass-half" />
      {{ age }} ans
      <br>
      <i class="fas fa-home" />
      Bordeaux
      <br>
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
  </div>
</template>

<script>
import { getDuration } from '../../../core/duration.js'

export default {
  computed: {
    age () {
      return getDuration('1988-06-23', 'today', false)[0]
    }
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

  .identity {
    margin-top: -5px;
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
