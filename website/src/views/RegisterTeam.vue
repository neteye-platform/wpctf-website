<template>
  <div class="register__team">
    <div class="mobile_message" v-if="mobileOrTablet()">
      <mobile-warning></mobile-warning>
    </div>
    <div v-else>
      <div id="HIDE_OR_DELETE_ME" class="overlay">
        <div class="overlay__content">
          <div class="overlay__logo">
            <div
              class="overlay__eye"
              :class="{ 'overlay__eye--active': timeToShow }"
            ></div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQAQMAAADdiHD7AAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAFJJREFUeF7t0cENgDAMQ9FwYgxG6WjpaIzCCAxQxVggFuDiCvlLOeRdHR9yzjncHVoq3npu+wQUrUuJHylSTmBaespJyJQoObUeyxDQb3bEm5Au81c0pSCD8HYAAAAASUVORK5CYII="
              alt="CTF"
            />
          </div>
          <h1 class="overlay__error">The site can't be reached</h1>
          <div class="overlay__description">
            <strong>wpctf.it</strong>'s server IP address could not be found or
            skill issues found.
          </div>
          <div class="overlay__code">
            DNS_PROBE_FINISHED_NXDOMAIN_OR_MAYBE_NOT
          </div>
        </div>
      </div>
      <div id="white_rabbit" v-if="!challengeSolved">
        <div class="flag">
          <flag direction="diagonal" />
        </div>
        <challenge-terminal @challenge-solved="onChallengeSolved" />
      </div>
      <RegistrationForm v-else :form-html="formHtml"></RegistrationForm>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MobileWarning from "@/components/MobileWarning.vue";
import Header from "@/components/common/Header.vue";
import ChallengeTerminal from "@/components/ChallengeTerminal.vue";
import { mobileOrTablet } from "@/utils/mobileUtils";
import RegistrationForm from "@/components/RegistrationForm.vue";
import Flag from "@/components/common/Flag.vue";

@Component({
  components: {
    Flag,
    RegistrationForm,
    ChallengeTerminal,
    Header,
    MobileWarning,
  },
  methods: { mobileOrTablet },
})
export default class RegisterTeam extends Vue {
  timeToShow = false;
  challengeSolved = false;
  formHtml = "";

  mounted(): void {
    console.log(
      "$$$$$$$$\\           $$\\ $$\\                         \n" + // eslint-disable-line
      "$$  _____|          $$ |$$ |                              \n" + // eslint-disable-line
      "$$ |       $$$$$$\\  $$ |$$ | $$$$$$\\  $$\\  $$\\  $$\\         \n" + // eslint-disable-line
      "$$$$$\\    $$  __$$\\ $$ |$$ |$$  __$$\\ $$ | $$ | $$ |     \n" + // eslint-disable-line
      "$$  __|   $$ /  $$ |$$ |$$ |$$ /  $$ |$$ | $$ | $$ |     \n" + // eslint-disable-line
      "$$ |      $$ |  $$ |$$ |$$ |$$ |  $$ |$$ | $$ | $$ |     \n" + // eslint-disable-line
      "$$ |      \\$$$$$$  |$$ |$$ |\\$$$$$$  |\\$$$$$\\$$$$  |    \n" + // eslint-disable-line
      "\\__|       \\______/ \\__|\\__| \\______/  \\_____\\____/   "); // eslint-disable-line

    console.log("   $$ |    $$ |                                                            \n" + // eslint-disable-line
      "   $$ |    $$ |                              \n" + // eslint-disable-line
      "$$$$$$$\\   $$$$$$$\\   $$$$$$\\               \n" + // eslint-disable-line
      "\\_$$  _|   $$  __$$\\ $$  __$$\\              \n" + // eslint-disable-line
      "  $$ |     $$ |  $$ |$$$$$$$$ |               \n" + // eslint-disable-line
      "  $$ |$$\\  $$ |  $$ |$$   ____|             \n" + // eslint-disable-line
      "  \\$$$$  | $$ |  $$ |\\$$$$$$$\\             \n" + // eslint-disable-line
      "    \\____/ \\__|  \\__| \\_______|"); // eslint-disable-line
    // eslint-disable-line
    console.log("              $$\\       $$\\   $$\\                                               \n" + // eslint-disable-line
      "              $$ |      \\__|  $$ |                                         \n" + // eslint-disable-line
      "$$\\  $$\\  $$\\ $$$$$$$\\  $$\\ $$$$$$\\    $$$$$$\\        \n" + // eslint-disable-line
      "$$ | $$ | $$ |$$  __$$\\ $$ |\\_$$  _|  $$  __$$\\              \n" + // eslint-disable-line
      "$$ | $$ | $$ |$$ |  $$ |$$ |  $$ |    $$$$$$$$ |             \n" + // eslint-disable-line
      "$$ | $$ | $$ |$$ |  $$ |$$ |  $$ |$$\\ $$   ____|           \n" + // eslint-disable-line
      "\\$$$$$\\$$$$  |$$ |  $$ |$$ |  \\$$$$  |\\$$$$$$$\\            \n" + // eslint-disable-line
      " \\_____\\____/ \\__|  \\__|\\__|   \\____/  \\_______|"); // eslint-disable-line

    console.log("                    $$\\       $$\\       $$\\   $$\\           \n" + // eslint-disable-line
      "                    $$ |      $$ |      \\__|  $$ |          \n" + // eslint-disable-line
      "$$$$$$\\   $$$$$$\\   $$$$$$$\\  $$$$$$$\\  $$\\ $$$$$$\\         \n" + // eslint-disable-line
      "$$  __$$\\  \\____$$\\ $$  __$$\\ $$  __$$\\ $$ |\\_$$  _|        \n" + // eslint-disable-line
      "$$ |  \\__| $$$$$$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |          \n" + // eslint-disable-line
      "$$ |      $$  __$$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$\\       \n" + // eslint-disable-line
      "$$ |      \\$$$$$$$ |$$$$$$$  |$$$$$$$  |$$ |  \\$$$$  |      \n" + // eslint-disable-line
      "\\__|       \\_______|\\_______/ \\_______/ \\__|   \\____/"); // eslint-disable-line

    console.log("in the DOM/Inspector...");

    const comment = document.createComment(
      "There must be a white rabbit in there"
    );
    document.body.insertBefore(comment, document.body.firstChild);

    this.timeToShow = true;
  }

  private onChallengeSolved(formHtml: string) {
    this.challengeSolved = true;
    this.formHtml = formHtml;
  }
}
</script>
<style lang="scss" scoped>
.flag {
  z-index: 99999;
  position: absolute;
  left: calc(50% - 4px);
  top: 20vh;
  width: 250px;
}
#white_rabbit {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background: black;
}
.flag {
  cursor: default !important;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  cursor: default;
  z-index: 9999;
  &__content {
    position: absolute;
    margin: 30vh auto 0;
    top: 11%;
    left: 50%;
    width: 100%;
    max-width: 600px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    @include breakpoint(large) {
      margin: 12vh auto 0;
      top: 11.25%;
    }
    @include breakpoint(xlarge) {
      max-width: 600px;
      margin: 16vh auto 0;
      top: 11.5%;
    }
  }
  &__logo {
    margin-bottom: 44px;
    width: 73px;
    @include breakpoint(small) {
      margin-bottom: 5.69vh;
    }
    @include breakpoint(medium) {
      margin-bottom: 5.69vh;
    }
    @include breakpoint(large) {
      margin-bottom: 40px;
      width: 72px;
    }
  }
  &__eye {
    background-color: red;
    width: 4px;
    height: 8px;
    position: relative;
    top: 47px;
    left: 9px;
    opacity: 0;
    visibility: hidden;
    &--active {
      visibility: visible;
      animation: blink 2s steps(2, end) infinite;
      @keyframes blink {
        0%,
        50% {
          opacity: 1;
        }
        50.01%,
        100% {
          opacity: 0;
        }
      }
    }
  }

  &__error {
    font-size: 1.5em;
    margin-bottom: 16px;
    color: #202124;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    line-height: 28.125px;
    @include breakpoint(small) {
      font-weight: normal;
      line-height: 1.25em;
    }
  }
  &__description {
    margin-bottom: 15px;
    color: rgb(95, 99, 104);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14.5px;
    line-height: 22px;
  }
  &__code {
    margin-bottom: 15px;
    color: rgb(95, 99, 104);
    font-size: 12px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}
</style>
<style lang="scss">
.register__team {
  cursor: $cursor-default-red;
}
.register-team {
  overflow: hidden;
}
.register__team #white_rabbit {
  padding-left: 20px;
}
</style>
