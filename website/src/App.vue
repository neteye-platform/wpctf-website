<template>
  <div id="app">
    <router-view class="router-container" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/common/Header.vue";

@Component({
  components: { Header },
})
export default class App extends Vue {
  mounted(): void {
    document.body.classList.add(this.$route.meta?.bodyClass);
  }
}
</script>

<style lang="scss">
#app {
  max-width: 100vw;
}
</style>
