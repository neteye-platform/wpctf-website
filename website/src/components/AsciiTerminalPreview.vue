<template>
  <TerminalPreview>
    <template v-slot:terminal-content>
      <div class="asciiPlayer-terminal" ref="player-container"></div>
    </template>
  </TerminalPreview>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TerminalPreview from "@/components/TerminalPreview.vue";

@Component({
  components: { TerminalPreview },
})
export default class AsciiTerminalPreview extends Vue {
  async mounted(): Promise<void> {
    // @ts-ignore
    await Vue.loadScript("/js/asciinema-player.min.js");

    // @ts-ignore
    AsciinemaPlayer.create( // eslint-disable-line
      "/video/608602.cast",
      this.$refs["player-container"],
      { cols: 89, rows: 30, autoPlay: true, controls: false, loop: true }
    );
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/asciinema-player.css";
</style>
