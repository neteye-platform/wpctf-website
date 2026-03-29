<template>
  <div class="rules" id="rules__scroll-point">
    <div class="container">
      <div class="rules__content">
        <div class="rules__title">Rules</div>
        <div class="rules__items">
          <div class="rules__item rules__item">
            <div class="rules__number">1</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >Teams compete to solve security-related challenges.</span
              >
              Each team works independently to solve various challenges.
              Challenges will test knowledge in different areas of
              cybersecurity. A maximum of 5 people per team is allowed.
            </div>
          </div>
          <div class="rules__item rules__item">
            <div class="rules__number">2</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >WP CTF is a jeopardy style CTF.</span
              >
              Challenges will be grouped into categories with specific focus
              areas like web exploitation, binary exploitation (pwn), reverse
              engineering, osint etc. Different challenges will require
              different skill sets.
            </div>
          </div>
          <div class="rules__item rules__item">
            <div class="rules__number">3</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >Points are awarded according to the difficulty of the challenge
                and how many people solved it.
              </span>
              Easy challenges will have lower point values and more complex
              challenges will have higher point values. The fewer teams solved
              the challenge the more points you get.
            </div>
          </div>
          <div class="rules__item rules__item--left-1">
            <div class="rules__number">4</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >No sharing of solutions with other teams.</span
              >
              Teams must not share answers or methods with others. Collaboration
              within the team is allowed, but not with other teams.
            </div>
          </div>
          <div class="rules__item rules__item--left-1">
            <div class="rules__number">5</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >No attacking other teams' systems or the event infrastructure
                is allowed</span
              >
              You can only target the systems provided specifically for the CTF.
              Any attacks on other teams or event infrastructure will result in
              disqualification.
            </div>
          </div>
          <div class="rules__item rules__item--left-1">
            <div class="rules__number">6</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >No use of automated scanning tools is allowed</span
              >
              Automated tools may flood systems and are disallowed.
            </div>
          </div>
          <div class="rules__item rules__item--left-2">
            <div class="rules__number">7</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >All tools and techniques must comply with the law.</span
              >
              You can only use legal methods and tools. Compliance with all
              applicable laws is mandatory.
            </div>
          </div>
          <div class="rules__item rules__item--left-2">
            <div class="rules__number">8</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >Collaboration within the team is encouraged; collusion between
                teams is prohibited.</span
              >
              Work together within your team to solve challenges. Working with
              other teams is considered cheating.
            </div>
          </div>
          <div class="rules__item rules__item--left-2">
            <div class="rules__number">9</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >Judges' decisions are final.</span
              >
              Any disputes will be settled by the event judges. Their decision
              on scoring or any other issues is final.
            </div>
          </div>
          <div class="rules__item rules__item--left-1">
            <div class="rules__number">10</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >Follow our code of conduct to maintain a respectful
                environment.</span
              >
              All participants must adhere to our code of conduct. This ensures
              a respectful, inclusive, and enjoyable event for all.
            </div>
          </div>
          <div class="rules__item rules__item--left-1">
            <div class="rules__number">11</div>
            <div class="rules__description">
              <span class="rules__description--highlight"
                >The team with the highest score at the end of the event
                wins.</span
              >
              Points are totaled at the end of the event. The team with the most
              points is declared the winner.
              <div class="wpctf-flag">
                Thank you for reading the rules! WPCTF{W3ll_B3gun_1s_Half_Don3}
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
export default class Rules extends Vue {}
</script>
<style lang="scss" scoped>
.rules {
  .wpctf-flag {
    display: none;
  }
  scroll-margin-top: 50px;
  @include breakpoint(large) {
    background-size: 29% 42%;
  }
  @include breakpoint(medium) {
    background-size: 29% 29%;
  }
  @include breakpoint(small) {
    background-size: 29% 29%;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 20px;
    margin-bottom: 260px;
    @include breakpoint(large) {
      margin-bottom: 200px;
    }
    @include breakpoint(medium) {
      margin-bottom: 80px;
    }
    @include breakpoint(small) {
      margin-bottom: 80px;
    }
  }
  &__title {
    margin-bottom: 80px;
    font-size: 100px;
    color: $main-text-color;
    text-shadow: $text-shadow-primary-text;
  }
  &__items {
    display: flex;
    flex-direction: column;
  }
  &__item {
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    border-top: 2px solid $divider-color;
    padding-top: 10px;
    width: 50%;
    &--left-1 {
      margin-left: 25%;
    }
    &--left-2 {
      margin-left: 50%;
    }
  }
  &__number {
    font-family: "DotGothic16";
    font-size: 80px;
    width: 50%;
    line-height: 1;
    text-shadow: $text-shadow-primary-text;
  }
  &__description {
    width: 50%;
    font-family: "VT323";
    color: $main-subtext-color-01;
    font-size: 20px;
    line-height: 1;
    &--highlight {
      color: $main-text-color;
    }
  }
  @include breakpoint(large) {
    &__item {
      padding-top: 10px;
      width: 75%;
      margin-left: 0;
      &--left-1 {
        margin-left: 25%;
      }
      &--left-2 {
        margin-left: 0;
      }
    }
    &__number {
      width: 35%;
    }
    &__description {
      width: 65%;
    }
  }
  @include breakpoint(medium) {
    &__item {
      padding-top: 10px;
      width: 100%;
      &--left-1 {
        margin-left: 0;
      }
      &--left-2 {
        margin-left: 0;
      }
    }
    &__number {
      width: 20%;
    }
    &__description {
      width: 80%;
    }
  }
  @include breakpoint(small) {
    &__item {
      width: 100%;
      &--left-1 {
        margin-left: 0;
      }
      &--left-2 {
        margin-left: 0;
      }
    }
    &__number {
      width: 25%;
    }
    &__description {
      width: 75%;
    }
  }
}
</style>
