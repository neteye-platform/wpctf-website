<template>
  <div
    class="navigation"
    :class="{
      navigation__background:
        (isOnAbout || isOnPrizes || isOnRules || isOnGallery) && !isOnHome,
    }"
  >
    <div class="container">
      <div class="navigation__content">
        <ul class="navigation__items">
          <li
            class="navigation__item"
            :class="{ 'navigation__item--active': isOnAbout }"
          >
            <a
              @click="moveTo('about__scroll-point')"
              class="navigation__link navigation__link--default"
              >About Event</a
            >
            <a
              @click="moveTo('about__scroll-point')"
              class="navigation__link navigation__link--mobile"
              >About</a
            >
          </li>
          <li
            class="navigation__item"
            :class="{ 'navigation__item--active': isOnPrizes }"
          >
            <a @click="moveTo('prizes__scroll-point')" class="navigation__link"
              >Prizes</a
            >
          </li>
          <li
            class="navigation__item"
            :class="{ 'navigation__item--active': isOnRules }"
          >
            <a @click="moveTo('rules__scroll-point')" class="navigation__link"
              >Rules</a
            >
          </li>
          <li
            class="navigation__item"
            :class="{ 'navigation__item--active': isOnGallery }"
          >
            <a @click="moveTo('gallery__scroll-point')" class="navigation__link"
              >Gallery</a
            >
          </li>
          <li class="navigation__item">
            <router-link to="/register-team" class="navigation__link">
              Registration
            </router-link>
          </li>
        </ul>
        <div class="navigation__event-name">WP CTF 2023</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TrackingService } from "@/core/Services/TrackingService/TrackingService";

@Component({})
export default class Navigation extends Vue {
  public isOnAbout = false;
  public isOnPrizes = false;
  public isOnRules = false;
  public isOnGallery = false;
  public isOnHome = false;
  mounted(): void {
    document.addEventListener("DOMContentLoaded", this.DOMHandler());
  }

  beforeUnmount(): void {
    document.removeEventListener("DOMContentLoaded", this.DOMHandler());
  }
  private DOMHandler() {
    return () => {
      const homeDiv = document.querySelector(".home");
      homeDiv?.addEventListener("scroll", this.isScrolledIntoView);
    };
  }

  moveTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      TrackingService.trackPage(`/${id.replace("__scroll-point", "")}`);
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  isScrolledIntoView(): void {
    const home = document.getElementById("capture__scroll-point");
    if (home) {
      const rect = home?.getBoundingClientRect();
      if (rect.bottom + 60 <= 0) {
        this.isOnHome = false;
      } else {
        this.isOnHome = true;
      }
    }

    const sections = [
      { id: "about__scroll-point", prop: "isOnAbout", visibleHeight: 0 },
      { id: "prizes__scroll-point", prop: "isOnPrizes", visibleHeight: 0 },
      { id: "rules__scroll-point", prop: "isOnRules", visibleHeight: 0 },
      { id: "gallery__scroll-point", prop: "isOnGallery", visibleHeight: 0 },
      { id: "scoreboard__scroll-point", prop: "isOnGallery", visibleHeight: 0 },
    ];

    // Calculate visible height for each section
    sections.forEach((section) => {
      let htmlElement = document.getElementById(section.id);
      if (htmlElement) {
        const rect = htmlElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // Entire section is in view
          section.visibleHeight = rect.height;
        } else if (rect.top < 0 && rect.bottom > 0) {
          // Only bottom part of the section is in view
          section.visibleHeight = rect.bottom;
        } else if (
          rect.top < window.innerHeight &&
          rect.bottom > window.innerHeight
        ) {
          // Only top part of the section is in view
          section.visibleHeight = window.innerHeight - rect.top;
        }
      }
    });

    // Determine the section with the maximum visible height
    const mostVisibleSection = sections.reduce((prev, current) => {
      return prev.visibleHeight > current.visibleHeight ? prev : current;
    });

    // Reset all and set the most visible section as active
    this.isOnAbout =
      this.isOnPrizes =
      this.isOnRules =
      this.isOnGallery =
        false;
    if (mostVisibleSection.visibleHeight > 0)
      this[mostVisibleSection.prop] = true;
  }
}
</script>
<style lang="scss" scoped>
.navigation {
  position: sticky;
  top: 0px;

  z-index: 10;

  &__background {
    background: url("~@/assets/images/bg/navigation.svg") no-repeat;
    background-size: cover;
  }
  &__content {
    margin-bottom: 200px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__items {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    @include breakpoint(medium) {
      justify-content: space-between;
      width: 100%;
    }
    @include breakpoint(small) {
      justify-content: space-between;
      width: 100%;
    }
  }
  &__item {
    text-shadow: $text-shadow-secondary-text;
    font-family: "VT323";
    margin-right: 40px;
    &:hover {
      cursor: $cursor-pointer-green;
      & .navigation__link {
        color: $main-link-color;
        //text-shadow: 0px 0px 3px rgba(255, 0, 0, 0.7);
      }
      &::after {
        opacity: 1;
      }
    }
    &::before {
      margin-right: 5px;
      content: ">";
    }
    &--active {
      & .navigation__link {
        color: $main-link-color;
        text-shadow: 0px 0px 3px rgba(255, 0, 0, 0.7);
      }
    }
    @include breakpoint(medium) {
      &::before {
        margin-right: 0;
        content: "";
      }
      margin: 0;
    }
    @include breakpoint(small) {
      &::before {
        margin-right: 0;
        content: "";
      }
      margin: 0;
    }
  }
  &__link {
    line-height: 20px;
    font-size: 20px;
    &--mobile {
      display: none;
    }
    &:hover {
      color: $main-link-color;
      text-shadow: 0px 0px 3px rgba(255, 0, 0, 0.7);
    }
    &--disabled {
      color: $main-subtext-color-01;
    }
    @include breakpoint(medium) {
      text-transform: uppercase;
      &--default {
        display: none;
      }
      &--mobile {
        display: block;
      }
    }
    @include breakpoint(small) {
      text-transform: uppercase;
      &--default {
        display: none;
      }
      &--mobile {
        display: block;
      }
    }
  }
  &__event-name {
    color: $main-text-color;
    text-shadow: $text-shadow-secondary-text;
    font-size: 50px;
    font-family: "W95FA";
    margin-top: 8px;

    @include breakpoint(large) {
      display: none;
    }
    @include breakpoint(medium) {
      display: none;
    }
    @include breakpoint(small) {
      display: none;
    }
  }
}
</style>
