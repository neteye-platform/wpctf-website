<template>
  <div class="gallery" ref="gallery_point" id="gallery__scroll-point">
    <div class="container">
      <div class="gallery_content">
        <div class="gallery__title">Gallery</div>
        <Photos
          location="Bolzano, Italy"
          date="2023, Nov"
          :availableImages="galleryImageData"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Photos from "./Photos.vue";
import { galleryImageData } from "../utils/image_ids";

@Component({
  components: {
    Photos,
  },
})
export default class Galleries extends Vue {
  galleryImageData = galleryImageData;
}
</script>

<style lang="scss" scoped>
.gallery {
  scroll-margin-top: 50px;
  &__content {
    padding-top: 34px;
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-family: "DotGothic16";
    font-size: 100px;
    color: $main-text-color;
    text-shadow: $text-shadow-primary-text;
    margin-bottom: 200px;
  }
}
</style>
