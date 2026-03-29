<template>
  <div class="cookie-banner" v-if="visible">
    <div class="cookie-banner__container">
      <div class="cookie-banner__title">Cookie consent</div>
      <div class="cookie-banner__content">
        This website uses cookies and tracking for analytics. For more
        information on how we use your data, please see our
        <a href="https://www.wuerth-phoenix.com/privacy-policy/">privacy</a> and
        <a href="https://www.wuerth-phoenix.com/cookie-policy/">cookies</a>
        policy.
      </div>
      <div class="cookie-banner__buttons">
        <div class="cookie-banner__button reject" @click="reject">REJECT</div>
        <div class="cookie-banner__button accept" @click="accept">ACCEPT</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TrackingService } from "@/core/Services/TrackingService/TrackingService";

@Component({})
export default class CookieBanner extends Vue {
  visible = true;

  mounted(): void {
    if (TrackingService.userAccepted() || TrackingService.userRejected()) {
      this.visible = false;
    }
  }

  accept(): void {
    TrackingService.conset();
    this.visible = false;
  }

  reject(): void {
    TrackingService.negate();
    this.visible = false;
  }
}
</script>
<style lang="scss" scoped>
.cookie-banner {
  position: absolute;
  background: $red-background;
  border: dashed 2px $main-text-color;
  width: 100%;
  max-width: 472px;
  height: 100%;
  max-height: 466px;
  z-index: 9999;
  bottom: 0;
  padding: 20px;

  &__title {
    font-family: DotGothic16;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
  }

  &__content {
    font-family: VT323;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    max-width: 312px;
  }

  &__container {
    height: 100%;
    width: 100%;
    position: relative;
  }

  &__buttons {
    display: flex;
    position: absolute;
    width: 100%;
    bottom: 0;
    flex-wrap: wrap;
  }

  &__button {
    border: dashed 2px $main-text-color;
    font-family: VT323;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    height: 40px;
    display: flex;
    width: calc(50% - 10px);
    align-items: center;
    padding-left: 20px;
    cursor: $cursor-pointer-green;

    &:first-child {
      margin-right: 10px;
    }

    &:nth-child(2) {
      margin-left: 10px;
    }
  }

  @include breakpoint(large) {
    height: 180px;
    max-width: unset;
    padding: 12px;
    position: fixed;
    left: 0;

    &__content {
      max-width: unset;
    }
  }

  @include breakpoint(medium) {
    height: 180px;
    max-width: unset;
    padding: 12px;
    position: fixed;
    left: 0;

    &__content {
      max-width: unset;
    }
  }

  @include breakpoint(small) {
    height: 260px;
    max-width: unset;
    padding: 12px;
    position: fixed;
    left: 0;

    &__content {
      max-width: unset;
    }

    &__button {
      width: 100%;

      &:first-child {
        margin-bottom: 10px;
        margin-right: 0;
      }

      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }
}
</style>
