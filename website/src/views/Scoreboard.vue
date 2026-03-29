<template>
  <div class="scoreboard">
    <div class="icon">
      <flag direction="diagonal" />
    </div>
    <div class="mobile-message">
      <div class="mobile-message__description">
        > <br />
        > <br />
        > <br />
        > Scoreboard will be available after the event is finished ... <br />
        > <br />
        > <br />
        >
      </div>
      <div class="mobile-message__back-home">
        <router-link to="/" class="mobile-message__back-home__link">
          &gt; <span>Back to Website</span> &lt;
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MobileWarning from "@/components/MobileWarning.vue";
import Header from "@/components/common/Header.vue";
import Flag from "@/components/common/Flag.vue";

@Component({
  components: { Flag, Header, MobileWarning },
})
export default class RegisterTeam extends Vue {}
</script>
<style lang="scss" scoped>
.scoreboard {
  .icon {
    width: 100%;
    margin-top: 80px;
    margin-left: 10px;
  }
  .mobile-message {
    background-color: #000000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;

    &__description {
      color: $main-text-color;
      font-family: "VT323";
      font-size: 20px;
      font-weight: 400;
      margin-top: 240px;
    }

    &__back-home {
      margin-top: 40px;

      &__link {
        color: $main-text-color;
        font-family: "VT323";
        font-size: 20px;
        font-weight: 400;

        span {
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
