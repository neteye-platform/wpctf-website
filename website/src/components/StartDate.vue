<template>
  <div class="start-date col-1">
    <div class="start-date__start">
      <div class="start-date__start-text glitch" data-text="25/11/2023">
        25/11/2023
      </div>
      <div class="start-date__start-marquee">
        <p>25/11/2023</p>
        <p>25/11/2023</p>
        <p>25/11/2023</p>
        <p>25/11/2023</p>
        <p>25/11/2023</p>
        <p>25/11/2023</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class StartDate extends Vue {}
</script>
<style lang="scss" scoped>
.start-date {
  &__start {
    &-marquee {
      display: none;
    }
  }
  &__start-text {
    font-size: 80px;
    color: $main-text-color;
    text-shadow: $text-shadow-primary-text;
    line-height: 110%;
  }
}
@include breakpoint(large) {
  .start-date {
    &__start {
      width: 100%;
      position: absolute;
      height: 86px;
      border-top: 1px solid rgba(227, 48, 80, 0.4);
      border-bottom: 1px solid rgba(227, 48, 80, 0.4);
      background-color: rgba(227, 48, 124, 0.1);
      padding: 10px 0px;
      left: 0;
      overflow: hidden;
      &-text {
        display: none;
      }
      &-marquee {
        font-size: 60px;
        width: 200%;
        display: flex;
        animation: marquee-infinity 20s linear infinite;
      }
      &-marquee p {
        white-space: nowrap;
        margin-right: 40px;
        width: 100%;
      }
    }
  }
}
@include breakpoint(medium) {
  .start-date {
    &__start {
      width: 100%;
      position: absolute;
      height: 86px;
      border-top: 1px solid rgba(227, 48, 80, 0.4);
      border-bottom: 1px solid rgba(227, 48, 80, 0.4);
      background-color: rgba(227, 48, 124, 0.1);
      padding: 10px 0px;
      left: 0;
      overflow: hidden;
      &-text {
        display: none;
      }
      &-marquee {
        font-size: 60px;
        width: 200%;
        display: flex;
        animation: marquee-infinity 20s linear infinite;
      }
      &-marquee p {
        white-space: nowrap;
        margin-right: 40px;
        width: 100%;
      }
    }
  }
}
@include breakpoint(small) {
  .start-date {
    &__start {
      width: 100%;
      position: absolute;
      height: 75px;
      border-top: 1px solid rgba(227, 48, 80, 0.4);
      border-bottom: 1px solid rgba(227, 48, 80, 0.4);
      background-color: rgba(227, 48, 124, 0.1);
      padding: 10px 0px;
      left: 0;
      overflow: hidden;

      &-text {
        display: none;
      }

      &-marquee {
        font-size: 50px;
        width: 200%;
        display: flex;
        animation: marquee-infinity 20s linear infinite;
      }

      &-marquee p {
        white-space: nowrap;
        margin-right: 40px;
        width: 100%;
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
