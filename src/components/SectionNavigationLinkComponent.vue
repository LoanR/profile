<script>
import HomeNavigationLinkComponent from './HomeNavigationLinkComponent.vue'

export default {
  extends: HomeNavigationLinkComponent
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/_colors.scss';
  @import '../assets/styles/nav_link.scss';

  a:hover:after {
    background: linear-gradient(
      0.25turn, $dark-color,
      $contrast-color 20%,
      $contrast-color 80%,
      $dark-color);
    opacity: 0.3;
  }

  a.router-link-exact-active:after {
    background: linear-gradient(
      0.25turn, $dark-color,
      $contrast-color 20%,
      $contrast-color 80%,
      $dark-color);
    opacity: 1;
  }
</style>
