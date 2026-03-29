<template>
  <div class="prizes" ref="prizes_point" id="prizes__scroll-point">
    <div class="container">
      <div class="prizes__content">
        <div
          class="prizes__title xxxxlarge-col-2 xxxlarge-col-2 xxlarge-col-2 xlarge-col-2 large-col-2 medium-col-4"
        >
          PRIZES
        </div>
        <div
          class="prizes__text xxxxlarge-offset-left-1 xxxlarge-offset-left-1 xxxxlarge-col-1 xxxlarge-col-1 xxlarge-offset-left-1 xxlarge-col-1 large-offset-left-1 large-col-2"
        >
          Prizes will be awarded in the form of Amazon vouchers, the value of
          each corresponding with the ranking position. The value of the prize
          will be divided equally between all team member. The voucher will be
          personal and will be issued by email within one working week after the
          event.
        </div>
        <div class="prizes__positions--container">
          <div
            class="prizes__position first xxxxlarge-col-1 xxxxlarge-offset-left-1 xxxlarge-col-1 xxxlarge-offset-left-1 xxlarge-col-1 xxlarge-offset-left-1 xlarge-col-1 xlarge-offset-left-1 large-col-1 large-offset-left-1"
          >
            <flag class="flag" direction="horizontal-right-to-left" />
            <div class="prizes__position--title">1st</div>
            <div class="prizes__position--euro">3000eur</div>
          </div>
          <div
            class="prizes__position second xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-1 large-col-1"
          >
            <flag class="flag" direction="horizontal-left-to-right" />
            <div class="prizes__position--title">2nd</div>
            <div class="prizes__position--euro">2000eur</div>
          </div>
          <div
            class="prizes__position third xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-1 large-col-1"
          >
            <flag class="flag" direction="horizontal-right-to-left" />
            <div class="prizes__position--title">3rd</div>
            <div class="prizes__position--euro">1000eur</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Flag from "@/components/common/Flag.vue";
@Component({
  components: { Flag },
})
export default class Prizes extends Vue {}
</script>
<style lang="scss" scoped>
.prizes {
  scroll-margin-top: 50px;
  @include breakpoint(large) {
    background-position: 100% 24%;
  }
  @include breakpoint(medium) {
    background: none;
  }
  @include breakpoint(small) {
    background: none;
  }

  &__content {
    border-bottom: 2px solid $divider-color;
    @include breakpoint(large) {
      background-position: 2% 56%;
    }
    @include breakpoint(medium) {
      background: none;
    }
    @include breakpoint(small) {
      background: none;
    }
  }

  &__title {
    font-size: 270px;
    color: $main-text-color;
    margin-top: 260px;
    text-shadow: $text-shadow-primary-text;
  }

  &__text {
    text-shadow: $text-shadow-secondary-text;
    font-family: "VT323";
    margin-top: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }

  &__positions {
    &--container {
      display: flex;
      align-items: flex-end;
      margin-top: 80px;
      margin-bottom: 260px;
    }
  }

  &__position {
    background: $prizes-background-color;
    padding: 20px;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    &--title {
      text-shadow: $text-shadow-primary-text;
      font-family: DotGothic16;
      font-size: 80px;
    }

    &--euro {
      text-shadow: $text-shadow-secondary-text;
      font-family: VT323;
      font-size: 40px;
    }

    .flag {
      position: absolute;
      top: -20px;
    }

    &.first {
      height: 632px;
      margin-bottom: 80px;
      background-image: url("../assets/images/bg/prize_item_1_bg.svg");
      @include breakpoint(medium) {
        background-image: url("../assets/images/bg/prize_item_1_mobile_bg.svg");
        background-repeat: no-repeat;
        background-size: cover;
      }
      @include breakpoint(small) {
        background-image: url("../assets/images/bg/prize_item_1_mobile_bg.svg");
      }
      .flag {
        right: 20%;
      }
    }

    &.second {
      height: 432px;
      margin-bottom: 40px;
      background-image: url("../assets/images/bg/prize_item_2_bg.svg");
      background-repeat: no-repeat;
      background-position: 95% 20%;

      @include breakpoint(large) {
        background-position: 95% 40%;
      }
      .flag {
        left: 20%;
      }
    }

    &.third {
      height: 232px;
      background-image: url("../assets/images/bg/prize_item_3_bg.svg");
      background-repeat: no-repeat;
      background-position: 100%;
      @include breakpoint(large) {
        background-repeat: repeat-y;
        background-size: contain;
      }
      @include breakpoint(medium) {
        background-size: cover;
      }
      .flag {
        right: 20%;
      }
    }
  }
}
@include breakpoint(large) {
  .prizes {
    &__title {
      font-size: 250px;
    }
  }
}
@include breakpoint(medium) {
  .prizes {
    &__title {
      font-size: 118px;
      margin-top: 120px;
    }

    &__text {
      margin-top: 20px;
    }

    &__positions {
      &--container {
        display: block;
        margin-bottom: 120px;
        margin-top: 100px;
      }
    }

    &__position {
      padding: 10px;

      &--title {
        font-size: 60px;
      }

      &--euro {
        font-size: 30px;
        text-align: right;
      }

      &.first,
      &.second,
      &.third {
        height: 150px;
        margin-bottom: 2px;

        .flag {
          display: none;
        }
      }

      &.first {
        .flag {
          display: block;
          right: 10%;
        }
      }
    }
  }
}
@include breakpoint(small) {
  .prizes {
    &__title {
      font-size: 118px;
      margin-top: 120px;
    }

    &__text {
      margin-top: 20px;
    }

    &__positions {
      &--container {
        display: block;
        margin-bottom: 120px;
        margin-top: 100px;
      }
    }

    &__position {
      padding: 10px;

      &--title {
        font-size: 60px;
      }

      &--euro {
        font-size: 30px;
        text-align: right;
      }

      &.first,
      &.second,
      &.third {
        height: 150px;
        margin-bottom: 2px;

        .flag {
          display: none;
        }
      }

      &.first {
        .flag {
          display: block;
          right: 10%;
        }
      }
    }
  }
}
</style>
