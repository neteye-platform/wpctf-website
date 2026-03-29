<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__row-first">
          <div
            class="footer__logo xxxxlarge-col-2 xxxlarge-col-2 xxlarge-col-2 xlarge-col-2"
          >
            <img src="@/assets/images/footer_logo.svg" alt="CTF" />
          </div>
          <div
            class="footer__navigation xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-1"
          >
            <Menu />
          </div>
        </div>
        <div class="footer__row-second">
          <div class="footer__start-date xxxxlarge-col-2 xxxlarge-col-2">
            <StartDate />
          </div>
          <div class="footer__partners xxxxlarge-col-2 xxxlarge-col-2">
            <Partners />
          </div>
        </div>
        <div class="footer__row-three">
          <div class="footer__copyright">
            © 2023 Würth Phoenix S.r.l. - VAT ID 01054690217
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StartDate from "@/components/StartDate.vue";
import Partners from "@/components/Partners.vue";
import Menu from "@/components/Menu.vue";
@Component({
  components: { Menu, Partners, StartDate },
})
export default class Footer extends Vue {}
</script>
<style lang="scss" scoped>
.footer {
  background-color: $footer-background-color;
  background-image: url("../assets/images/bg/footer_bg.svg");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-size: cover;
  &__content {
    display: flex;
    flex-direction: column;
    margin-top: 260px;
    padding-top: 120px;
  }
  &__row-first,
  &__row-second {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__row-first {
    margin-bottom: 400px;
  }
  &__row-second {
    margin-bottom: 20px;
  }
  &__copyright {
    padding: 20px 0;
    padding: 200px 0px 40px 0px;
    color: rgba(55, 125, 121, 0.5);
    border-top: 2px solid $footer-divider-color;
    font-size: 16px;
    font-family: VT323;
    @include breakpoint(large) {
      color: $partners_label_color;
      text-align: right;
    }
    @include breakpoint(medium) {
      color: $partners_label_color;
      text-align: right;
    }
    @include breakpoint(small) {
      color: $partners_label_color;
      text-align: right;
    }
  }
  &__navigation {
    margin-right: 25%;
    @include breakpoint(large) {
      margin-right: 0;
    }
    @include breakpoint(medium) {
      margin-right: 0;
    }
    @include breakpoint(small) {
      margin-right: 0;
    }
  }
  .nav {
    flex-direction: column !important;
    align-items: flex-start;
    @include breakpoint(large) {
      align-items: flex-end;
    }
    @include breakpoint(medium) {
      align-items: flex-end;
    }
    @include breakpoint(small) {
      align-items: flex-end;
    }
  }
  &__logo {
    opacity: 0;
  }
}
@include breakpoint(large) {
  .footer {
    &__row-first {
      margin-bottom: 240px;
    }
    &__row-second {
      flex-direction: column;
    }
    &__start-date {
      margin-bottom: 20px;
    }
    &__partners {
      margin-top: 106px;
    }
  }
}
@include breakpoint(medium) {
  .footer {
    &__row-first {
      margin-bottom: 160px;
    }
    &__row-second {
      flex-direction: column;
    }
    &__partners {
      margin-top: 106px;
    }
  }
}
@include breakpoint(small) {
  .footer {
    &__row-first {
      margin-bottom: 160px;
    }
    &__row-second {
      flex-direction: column;
    }
    &__partners {
      margin-top: 106px;
    }
  }
}
</style>
