<template>
  <nav class="nav">
    <router-link to="/register-team" class="nav__link">Register</router-link>
    <a @click="moveTo('scoreboard__scroll-point')" class="nav__link">
      Scoreboard
    </a>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mobileOrTablet } from "@/utils/mobileUtils";
import { TrackingService } from "@/core/Services/TrackingService/TrackingService";
@Component({
  methods: { mobileOrTablet },
})
export default class Menu extends Vue {
  moveTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      TrackingService.trackPage(`/${id.replace("__scroll-point", "")}`);
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 225px;
  &__link {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-right: 40px;
    text-shadow: $text-shadow-secondary-text;
    &--hint {
      display: none;
      width: 245px;
      position: absolute;
      color: $main-link-color;
      text-transform: none;
      &.hide-element {
        display: none !important;
      }
    }
    &:hover &--hint {
      display: block;
    }
  }
}
@include breakpoint(large) {
  .nav {
    flex-direction: row;
    align-items: flex-end;
    max-width: 200px;
  }
}
@include breakpoint(medium) {
  .nav {
    flex-direction: column;
    align-items: flex-end;
    max-width: 200px;
    &__link {
      margin-right: 0;
    }
  }
}
@include breakpoint(small) {
  .nav {
    flex-direction: column;
    align-items: flex-end;
    &__link {
      margin-right: 0;
    }
  }
}
</style>
