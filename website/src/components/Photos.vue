<template>
  <div class="photos">
    <div class="photos__content">
      <div class="photos__details">
        <div class="photos__date">{{ date }}</div>
        <div class="photos__location">{{ location }}</div>
      </div>
      <div class="photos__items">
        <div class="photos__items-box">
          <a
            v-for="image in images"
            :key="image.key"
            :href="
              'https://www.wuerth-phoenix.com/wp-content/uploads/2023/11/' +
              image.image
            "
            :data-pswp-width="1024"
            :data-pswp-height="768"
            :data-cropped="true"
            target="_blank"
            rel="noreferrer"
            class="pswp--custom-bg"
          >
            <img
              :src="
                'https://www.wuerth-phoenix.com/wp-content/uploads/2023/11/' +
                image.preview
              "
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="photos__show-content">
        <div class="photos__show-more" @click="showMore()" v-if="!showAll">
          SHOW MORE
        </div>
        <div class="photos__show-more" @click="showLess()" v-else>
          SHOW LESS
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PhotoSwipeLightbox from "photoswipe/dist/photoswipe-lightbox.esm.js";
import { ImageData } from "../utils/image_ids";
import "photoswipe/dist/photoswipe.css";
import { TrackingService } from "@/core/Services/TrackingService/TrackingService";

@Component({})
export default class Photos extends Vue {
  @Prop() availableImages!: Array<ImageData>;
  @Prop() date!: string;
  @Prop() location!: string;

  images: Array<ImageData> = [];
  showAll = false;
  lightbox: PhotoSwipeLightbox | null = null;

  mounted(): void {
    if (!this.lightbox) {
      this.populateImages();
      this.lightbox = new PhotoSwipeLightbox({
        gallery: ".photos__items",
        children: "a",
        pswpModule: () => import("photoswipe/dist/photoswipe.esm.js"),
        mainClass: "pswp--custom-bg",
      });
      this.lightbox.init();
    }
  }

  unmounted(): void {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  }

  showMore(): void {
    this.showAll = true;
    this.populateImages();
  }

  showLess(): void {
    this.showAll = false;
    this.populateImages();
    this.moveTo("gallery__scroll-point");
  }

  populateImages(): void {
    if (this.showAll) {
      this.images = this.availableImages;
    } else {
      this.images = this.availableImages.slice(0, 21);
    }
  }

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
.photos {
  scroll-margin-top: 50px;
  &__content {
    padding-top: 34px;
    display: flex;
    flex-direction: column;
    margin-bottom: 202px;
  }
  &__details {
    font-family: "VT323";
    color: $main-text-color;
    text-shadow: $text-shadow-primary-text;
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin-left: auto;
    align-items: baseline;
    margin-bottom: 20px;
    @include breakpoint(large) {
      width: 100%;
      margin-left: 0;
    }
    @include breakpoint(medium) {
      width: 100%;
      margin-left: 0;
    }
    @include breakpoint(small) {
      width: 100%;
      margin-left: 0;
    }
  }

  &__date {
    font-size: 40px;
    text-shadow: #ff0000b2 0px 0px 10px;
    @include breakpoint(small) {
      font-size: 30px;
    }
  }

  &__location {
    text-shadow: #ff0000b2 0px 0px 10px;
    font-size: 16px;
  }
  &__show-content {
    width: 75%;
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
    grid-column-gap: 20px;
    @include breakpoint(medium) {
      width: 100%;
      margin: 0;
    }
    @include breakpoint(small) {
      width: 100%;
      margin: 0;
    }
  }
  &__show-more {
    text-align: center;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: #071214;
    font-family: "VT323";
    font-size: 16px;
    font-weight: 400;
    text-shadow: #ff0000b2 0px 0px 10px;
    &:hover {
      cursor: $cursor-pointer-green;
    }
    @include breakpoint(medium) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      width: 100%;
      margin: 0;
    }
    @include breakpoint(small) {
      grid-template-columns: 1fr;
      width: 100%;
      margin: 0;
    }
  }
  &__items {
    border-top: 2px solid #0e1313;
    padding-top: 20px;
    margin-bottom: 20px;
    &-box {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin-left: auto;
      width: 75%;
      @include breakpoint(medium) {
        width: 100%;
        margin: 0;
      }
      @include breakpoint(small) {
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        width: 100%;
        margin: 0;
      }
      a {
        align-self: flex-start;
        max-width: 150px;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          padding-bottom: 2px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
img.pswp__img {
  height: auto !important;
}
div.pswp__img--placeholder,
.pswp__img--with-bg {
  background: transparent !important;
}
</style>
