<template>
  <div class="mobile-warning">
    <div class="mobile-warning__description">
      Registration is only possible through desktop device! How can you hack
      through mobile...? ;)
    </div>
    <div class="mobile-warning__back-home">
      <router-link to="/" class="mobile-warning__back-home__link">
        &gt; <span>Back to Website</span> &lt;
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class MobileWarning extends Vue {}
</script>
<style lang="scss" scoped>
.mobile-warning {
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;

  &__description {
    color: $main-text-color;
    text-shadow: 0px 0px 5px rgba(255, 0, 0, 0.7);
    font-family: "VT323";
    font-size: 20px;
    font-weight: 400;
    margin-top: 240px;
  }

  &__back-home {
    margin-top: 40px;
    &__link {
      color: $main-text-color;
      text-shadow: 0px 0px 5px rgba(255, 0, 0, 0.7);
      font-family: "VT323";
      font-size: 20px;
      font-weight: 400;
      span {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
}
</style>
