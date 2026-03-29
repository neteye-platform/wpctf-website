<template>
  <div class="sponsors">
    <div
      class="sponsors__content xxxxlarge-col-2 xxxlarge-col-2 xxlarge-col-2 xlarge-col-2 large-col-4"
    >
      <div class="sponsors__items">
        <div
          class="sponsors__item"
          v-for="(partner, index) in partners"
          :key="index"
        >
          <div class="sponsors__label">{{ partner.position }}</div>
          <div class="sponsors__logo">
            <img :src="loadImg(partner.logo)" :alt="partner.position" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Partners extends Vue {
  public loadImg(path: string): string {
    return require("@/assets/images/partners/" + path);
  }
  get partners(): any[] {
    return [
      { position: "ORGANIZER", logo: "logo-wp.svg" },
      { position: "GOLD SPONSOR", logo: "logo-volksbank.svg" },
      { position: "SILVER SPONSOR", logo: "logo-lango.svg" },
      { position: "", logo: "logo-agilimo.svg" },
      { position: "BRONZE SPONSORS", logo: "logo-icinga.svg" },
      { position: "", logo: "logo-loacker.svg" },
      { position: "", logo: "logo-wuerth.svg" },
    ];
  }
}
</script>
<style lang="scss" scoped>
.sponsors {
  scroll-margin-top: 50px;
  &__content {
    padding-top: 34px;
    width: calc(100% - 5px);
    max-width: $xxxxlarge-column-size * 2;
    @include breakpoint(xxxlarge) {
      max-width: $xxxlarge-column-size * 2;
    }
    @include breakpoint(xxlarge) {
      max-width: $xxlarge-column-size * 2;
    }
    @include breakpoint(xlarge) {
      max-width: $xlarge-column-size * 2;
    }
    @include breakpoint(large) {
      max-width: $large-column-size * 4;
    }
    @include breakpoint(medium) {
      max-width: $medium-column-size * 4;
    }
    @include breakpoint(small) {
      max-width: $small-column-size * 4;
    }
  }
  &__items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__item {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: space-between;
    &:nth-child(3) img {
      padding: 0;
    }
    &:nth-child(4) img {
      padding: 0;
    }
    &:nth-child(5) img {
      padding: 0;
    }
  }
  &__label {
    color: $partners_label_color;
    margin-bottom: 10px;
    font-size: 10px;
    font-family: "VT323";
  }
  &__logo {
    & img {
      padding: 4px 0px;
    }
  }
}
@include breakpoint(small) {
  .sponsors {
    &__items {
      justify-content: flex-start;
    }
    &__item {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
