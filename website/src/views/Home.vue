<template>
  <div class="home">
    <Header />
    <div class="parallax">
      <div class="parallax__layer--capture"></div>
    </div>
    <CaptureIfYouCan />
    <Navigation />
    <About />
    <div class="parallax">
      <div class="parallax__layer--prizes"></div>
    </div>
    <Prizes />
    <div class="parallax">
      <div class="parallax__layer--rules"></div>
    </div>
    <Rules />
    <RegisterTeamHomePage />
    <Gallery />
    <Scoreboard />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TerminalPreview from "@/components/TerminalPreview.vue";
import Partners from "@/components/Partners.vue";
import Rules from "@/components/Rules.vue";
import Navigation from "@/components/Navigation.vue";
import StartDate from "@/components/StartDate.vue";
import Footer from "@/components/Footer.vue";
import RegisterTeamHomePage from "@/components/RegisterTeamHomePage.vue";
import CaptureIfYouCan from "@/components/CaptureIfYouCan.vue";
import Prizes from "@/components/Prizes.vue";
import About from "@/components/About.vue";
import Header from "@/components/common/Header.vue";
import Gallery from "@/components/Gallery.vue";
import Scoreboard from "@/components/Scoreboard.vue";

@Component({
  components: {
    Scoreboard,
    Gallery,
    Header,
    About,
    Prizes,
    CaptureIfYouCan,
    RegisterTeamHomePage,
    Footer,
    StartDate,
    Navigation,
    Rules,
    Partners,
    TerminalPreview,
  },
})
export default class Dashboard extends Vue {}
</script>
<style lang="scss">
.home {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}
.parallax {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transform: translateZ(-1px) scale(2);
  &__layer {
    &--capture:before {
      background: url("../assets/images/bg/capture_the_flag_bg.svg") no-repeat
        center top;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 15%;
      @include breakpoint(large) {
        top: 100px;
        left: 0;
      }
      @include breakpoint(medium) {
        left: 0;
      }
      @include breakpoint(small) {
        left: 0;
      }
    }
    &--prizes:before {
      background: url("../assets/images/bg/prizes_bg_one.svg") no-repeat;
      background-position: 15% 50%;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    &--prizes:after {
      background: url("../assets/images/bg/prizes_outer.svg") no-repeat right
        center;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }
    &--rules:before {
      background: url("../assets/images/bg/rules_bg.svg") no-repeat;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 350px;
      left: 0;
    }
  }
}
</style>
