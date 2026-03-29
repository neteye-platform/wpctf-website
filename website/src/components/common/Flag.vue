<template>
  <img
    src="@/assets/images/flag.svg"
    alt="flag"
    @mouseover="togglePosition"
    @click="togglePosition"
    :class="[direction, { moved }]"
  />
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Flag extends Vue {
  @Prop({ default: "diagonal" }) direction!:
    | "diagonal"
    | "horizontal-right-to-left"
    | "horizontal-left-to-right";

  moved = false;

  togglePosition(): void {
    this.moved = !this.moved;
  }
}
</script>
<style lang="scss" scoped>
img {
  z-index: 9;
  position: relative;
  &.moved {
    &.horizontal-right-to-left {
      left: 50% !important;
    }
    &.horizontal-left-to-right {
      left: 80% !important;
    }
    &.diagonal {
      left: -16% !important;
      top: 100% !important;
    }
  }
}
</style>
