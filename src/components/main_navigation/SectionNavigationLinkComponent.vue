<script>
import HomeNavigationLinkComponent from './HomeNavigationLinkComponent.vue'

export default {
  extends: HomeNavigationLinkComponent
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/_colors.scss';
  @import '../../assets/styles/_transitions.scss';
  @import '../../assets/styles/vue_nav_link.scss';

  div a {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: transparent;
      opacity: 0;
      transition: all $t-duration $t-timing-function;
    }

    &:hover::after {
      background: linear-gradient(
        0.25turn, $dark-color,
        var(--primary-color) 20%,
        var(--primary-color) 80%,
        $dark-color);
      opacity: 0.4;
    }

    &.router-link-exact-active::after {
      background: linear-gradient(
        0.25turn, $dark-color,
        var(--primary-color) 20%,
        var(--primary-color) 80%,
        $dark-color);
      opacity: 1;
    }
  }
</style>
