<template>
  <div class="capture" ref="capture_point" id="capture__scroll-point">
    <div class="container">
      <div class="capture__content">
        <div class="capture__top">
          <div
            class="capture__terminal xxxxlarge-col-2 xxxlarge-col-2 xxlarge-col-2 xlarge-col-2"
          >
            <TerminalPreview class="terminal" />
            <TerminalPreview class="terminal" />
            <TerminalPreview class="terminal" />
            <AsciiTerminalPreview class="terminal" />
          </div>
          <div
            class="capture__slide xxxxlarge-col-2 xxxlarge-col-2 xxlarge-col-2 xlarge-col-2 large-col-3 medium-col-4 small-col-4"
          >
            <div class="capture__text glitch" data-text="WP CTF 2023">
              WP CTF 2023 <br />
              <span class="capture__text--subtext"
                >Capture the flag, if you can ;)</span
              >
            </div>
            <div
              class="capture__description xxxxlarge-col-1 xxxlarge-col-1 large-col-3"
            >
              { WP CTF 2023 } event for young cyber security enthusiasts in
              South Tyrol is back! Get ready for the second edition of WP
              Capture the Flag happening on November 25th @ Würth Phoenix in
              Bolzano. Are you all set? Register till November 20th - maximum 5
              people per team.
            </div>
          </div>
          <cookie-banner />
        </div>
        <div class="capture__bottom">
          <div class="capture__start xxxxlarge-col-2 xxxlarge-col-2">
            <StartDate />
          </div>
          <div class="capture__partners xxxxlarge-col-2 xxxlarge-col-2">
            <Partners />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StartDate from "@/components/StartDate.vue";
import Partners from "@/components/Partners.vue";
import TerminalPreview from "@/components/TerminalPreview.vue";
import AsciiTerminalPreview from "@/components/AsciiTerminalPreview.vue";
import CookieBanner from "@/components/CookieBanner.vue";
@Component({
  components: {
    CookieBanner,
    AsciiTerminalPreview,
    TerminalPreview,
    Partners,
    StartDate,
  },
})
export default class CaptureIfYouCan extends Vue {}
</script>
<style lang="scss" scoped>
.capture {
  &__content {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid $divider-color;
    min-height: calc(100vh - 196px);
    justify-content: space-evenly;
  }
  &__terminal {
    overflow: visible;
    position: relative;
    width: 100%;
    height: 464px;

    .terminal {
      position: absolute;

      &:nth-child(1) {
        left: 0;
        top: 0;
        z-index: 0;
      }
      &:nth-child(2) {
        left: 20px;
        top: 40px;
        z-index: 1;
      }
      &:nth-child(3) {
        left: 40px;
        top: 80px;
        z-index: 2;
      }
      &:nth-child(4) {
        left: 60px;
        top: 120px;
        z-index: 3;
      }
    }

    @include breakpoint(large) {
      display: none;
    }
    @include breakpoint(medium) {
      display: none;
    }
    @include breakpoint(small) {
      display: none;
    }
  }
  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }
  &__text {
    font-size: 130px;
    font-family: "W95FA";
    margin-bottom: 40px;
    color: $main-text-color;
    text-shadow: $text-shadow-primary-text;
    line-height: 0.6;
    &--subtext {
      font-family: "VT323";
      font-size: 40px;
      @include breakpoint(medium) {
        font-size: 20px;
      }
      @include breakpoint(small) {
        font-size: 20px;
      }
    }
    @include breakpoint(xxxxlarge) {
      font-size: 120px;
    }
    @include breakpoint(xxlarge) {
      font-size: 106px;
    }
    @include breakpoint(xlarge) {
      font-size: 100px;
    }
    @include breakpoint(large) {
      font-size: 92px;
      margin-bottom: 40px;
    }
    @include breakpoint(medium) {
      font-size: 60px;
    }
    @include breakpoint(small) {
      font-size: 60px;
    }
  }
  &__description {
    margin-bottom: 20px;
    font-size: 20px;
    font-family: "VT323";
    color: $main-subtext-color-01;
    text-shadow: $text-shadow-secondary-text;
    @include breakpoint(large) {
      font-size: 16px;
    }
    @include breakpoint(medium) {
      font-size: 16px;
    }
    @include breakpoint(small) {
      font-size: 16px;
    }
  }
  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    @include breakpoint(large) {
      flex-direction: column;
    }
    @include breakpoint(medium) {
      flex-direction: column;
    }
    @include breakpoint(small) {
      flex-direction: column;
      margin-top: 40px;
    }
  }
  &__slide {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include breakpoint(large) {
      margin-top: 55px;
      margin-left: 25%;
      margin-bottom: 100px;
    }
    @include breakpoint(medium) {
      margin-top: 122px;
    }
    @include breakpoint(small) {
      margin-top: 40px;
    }
  }
  &__partners {
    @include breakpoint(large) {
      margin-top: 106px;
    }
    @include breakpoint(medium) {
      margin-top: 106px;
    }
    @include breakpoint(small) {
      margin-top: 65px;
    }
  }
}
</style>
