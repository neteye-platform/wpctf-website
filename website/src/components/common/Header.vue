<template>
  <header>
    <div class="container">
      <div class="header__content">
        <div
          class="header__logo xxxxlarge-col-3 xxxlarge-col-2 xxlarge-col-2 xlarge-col-2 large-col-2"
        >
          <img src="@/assets/images/footer_logo.svg" alt="CTF" />
        </div>
        <div
          class="header__menu xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-1 large-col-3 medium-col-4 small-col-4"
        >
          <Menu />
        </div>
        <div
          class="header__icon xxxxlarge-col-1 xxxlarge-col-1 xxlarge-col-1 xlarge-col-1"
        >
          <flag direction="diagonal" />
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "@/components/Menu.vue";
import Flag from "@/components/common/Flag.vue";

@Component({
  components: { Flag, Menu },
})
export default class Header extends Vue {}
</script>
<style lang="scss" scoped>
.header {
  &__content {
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }
  &__logo {
    max-width: 50%;
  }
  &__menu {
    max-width: 25%;
  }
  &__icon {
    max-width: 25%;
  }
  &__logo img {
    width: 76px;
  }
  &__icon img {
    float: right;
  }
}

@include breakpoint(large) {
  .header {
    &__logo {
      max-width: 25%;
    }
    &__menu {
      width: 100%;
    }
    &__icon {
      display: none;
    }
  }
}
@include breakpoint(medium) {
  .header {
    &__logo {
      max-width: 25%;
    }
    &__content {
      margin-top: 20px;
      justify-content: space-between;
    }
    &__menu {
      width: 100%;
    }
    &__icon {
      display: none;
    }
  }
}
@include breakpoint(small) {
  .header {
    &__content {
      margin-top: 20px;
      justify-content: space-between;
    }
    &__menu {
      margin-right: 0;
      width: 50%;
    }
    &__logo {
      width: 50%;
    }
    &__icon {
      display: none;
    }
  }
}
</style>
