<template>
  <div class="date">
    <div class="container">
      <div class="date__content">
        <div class="start-date">
          <div class="start-date__start">
            <div class="container">
              <div class="start-date__text">{ WP CTF 2023 }</div>
            </div>
            <div class="start-date__start-marquee">
              <p>25/11/2023</p>
              <p>25/11/2023</p>
              <p>25/11/2023</p>
              <p>25/11/2023</p>
              <p>25/11/2023</p>
              <p>25/11/2023</p>
            </div>
            <div class="container">
              <div class="start-date__register">
                <router-link
                  to="/register-team"
                  class="start-date__register-text nav__link"
                  >&gt; REGISTER TEAM &lt;</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class RegisterTeamHomePage extends Vue {}
</script>
<style lang="scss" scoped>
.start-date {
  height: 337px;
  width: 100%;
  @include breakpoint(medium) {
    height: 164px;
  }
  @include breakpoint(small) {
    height: 164px;
  }
  &__start {
    width: 100%;
    position: absolute;
    padding: 0px 0px;
    left: 0;
    overflow: hidden;
    &-marquee {
      font-size: 60px;
      width: 200%;
      display: flex;
      animation: marquee-infinity 20s linear infinite;
      padding-top: 26px;
      margin-bottom: 41px;
    }
    &-marquee p {
      white-space: nowrap;
      margin-right: 40px;
      width: 100%;
      font-family: DotGothic16;
      font-size: 130px;
      font-weight: 400;
      line-height: 143px;
      text-align: center;
      color: $main-text-color;
      @include breakpoint(medium) {
        font-size: 71px;
        line-height: 71px;
      }
      @include breakpoint(small) {
        font-size: 71px;
        line-height: 71px;
      }
    }
  }
  &__text {
    text-shadow: $text-shadow-primary-text;
    color: $main-subtext-color-01;
    font-family: VT323;
    font-size: 60px;
    font-weight: 400;
    line-height: 66px;
    letter-spacing: 0em;
    text-align: center;
    @include breakpoint(medium) {
      font-size: 20px;
      line-height: 20px;
    }
    @include breakpoint(small) {
      font-size: 20px;
      line-height: 20px;
    }
  }
  &__register {
    text-align: center;
    &-text {
      font-family: VT323;
      font-size: 20px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 10vh;
    }
  }
}
.date {
  background-image: url("../assets/images/bg/register_team_home_page_bg.svg");
  background-repeat: repeat-x;
  background-position: 0% 0%;

  &__content {
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 240px;

    &--text {
      font-family: DotGothic16;
      font-size: 40px;
      font-weight: 400;
      line-height: 44px;
      text-align: center;
      color: $main-subtext-color-01;
    }

    &--date {
      font-family: DotGothic16;
      font-size: 130px;
      font-weight: 400;
      line-height: 143px;
      text-align: center;
      color: $main-text-color;
      margin-top: 26px;
    }

    &--register {
      font-family: VT323;
      font-size: 20px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      margin-top: 10vh;
    }
  }
}
@include breakpoint(medium) {
  .date {
    &__content {
      height: 441px;
      margin-top: 200px;
      margin-bottom: 200px;

      &--date {
        font-size: 71px;
        line-height: 78px;
      }

      &--text {
        font-size: 20px;
        line-height: 22px;
      }

      &--register {
        margin-top: 26px;
      }
    }
  }
}
@include breakpoint(small) {
  .date {
    &__content {
      height: 441px;
      margin-top: 200px;
      margin-bottom: 200px;

      &--date {
        font-size: 18vw;
        line-height: 78px;
      }

      &--text {
        font-size: 20px;
        line-height: 22px;
      }

      &--register {
        margin-top: 26px;
      }
    }
  }
}
@keyframes marquee-infinity {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
