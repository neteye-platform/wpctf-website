<template>
  <div class="about" id="about__scroll-point">
    <div class="container">
      <div class="about__content">
        <div
          class="about__left xxxxlarge-col-2 xxxlarge-col-2 xxlarge-col-2 xlarge-col-2 large-col-4 medium-col-4 small-col-4"
        >
          <h1 class="about__title">About Event</h1>
          <div
            class="about__terminal xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-1 large-col-4 medium-col-4 small-col-4"
          >
            Initialising injection sequence...<br />
            Machine = Windows11<br />
            IP = 10.123.76.28<br />
            Location = Bolzano<br />
            Subject = INFECTED<br />
            Permission = PARTICIPANTS_ONLY<br />
            ...<br />
            ...<br />
            ...<br />
            Do you wish to continue? [y/n]
          </div>
        </div>
        <div
          class="about__right xxxxlarge-col-2 xxxlarge-col-2 xxlarge-col-2 xlarge-col2 large-col-4 medium-col-4 small-col-4"
        >
          <div
            class="about__first-text xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-2 large-col-4"
          >
            The { WP CTF 2023 } competition is designed for university students
            skilled in cyber security. The aim of the challenge is to find
            software vulnerabilities and collect all related hidden "flags".
          </div>
          <div
            class="about__date xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-2 xlarge-col-2 large-col-4"
          >
            November 25th
            <span class="about__time">November 25, 2023 08.30 - 18.00</span>
          </div>
          <div
            class="about__place xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-2 large-col-4"
          >
            Bolzano
            <span class="about__address"
              >Johann Kravogl Str. 4, 39100 Bolzano, Italy</span
            >
          </div>
          <div
            class="about__text-second xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-2 large-col-4"
          >
            You will only need your laptop, we will take care of the rest! We'll
            make sure you have enough energy to capture all the flags, breakfast
            and lunch are offered. You can also join the the aperitif with the
            other participants and WP CTF squad after the competition! :)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class About extends Vue {}
</script>
<style lang="scss" scoped>
.about {
  scroll-margin-top: 50px;
  &__content {
    text-shadow: $text-shadow-secondary-text;
    display: flex;
    flex-direction: row;
    background-color: $red-background;
    border: 2px solid $red-background-border;
    padding: 20px;
    margin-bottom: 140px;
    background-image: url("../assets/images/bg/about_event_bg.svg");
    background-repeat: no-repeat;
    background-position: 101%;
    @include breakpoint(medium) {
      flex-direction: column;
      margin-top: 120px;
    }
    @include breakpoint(small) {
      flex-direction: column;
      margin-top: 120px;
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__title {
    text-shadow: $text-shadow-primary-text;
    text-align: left;
    margin-bottom: 582px;
    font-size: 60px;
    font-weight: 400;
    @include breakpoint(large) {
      font-size: 50px;
    }
    @include breakpoint(medium) {
      margin-bottom: 80px;
      font-size: 50px;
    }
    @include breakpoint(small) {
      margin-bottom: 80px;
      font-size: 50px;
    }
  }
  &__terminal {
    font-size: 11px;
    line-height: 10.67px;
    font-weight: 400;
    font-family: "W95";
    margin-bottom: -10px;
    margin-left: -10px;
    @include breakpoint(medium) {
      display: none;
    }
    @include breakpoint(small) {
      display: none;
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__first-text {
    margin-bottom: 40px;
    font-family: "VT323";
    font-size: 20px;
    line-height: 20px;
    @include breakpoint(medium) {
      font-size: 20px;
      line-height: 20px;
    }
    @include breakpoint(small) {
      font-size: 20px;
      line-height: 20px;
    }
  }
  &__date,
  &__place {
    text-shadow: $text-shadow-primary-text;
    font-family: "DotGothic16";
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
    @include breakpoint(large) {
      font-size: 50px;
      line-height: 50px;
    }
    @include breakpoint(medium) {
      font-size: 40px;
      line-height: 30px;
    }
    @include breakpoint(small) {
      font-size: 40px;
      line-height: 30px;
    }
  }
  &__time,
  &__address {
    margin-top: 20px;
    font-family: "VT323";
    font-size: 20px;
    margin-bottom: 40px;
    display: block;
    line-height: 1;
    text-shadow: $text-shadow-secondary-text;
  }
  &__text-second {
    font-family: "VT323";
    font-size: 20px;
    line-height: 20px;
  }
}
</style>
