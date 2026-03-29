<template>
  <TerminalPreview class="challenge-terminal">
    <template v-slot:terminal-content>
      <v-shell
        class="shell"
        :banner="banner"
        :shell_input="send_to_terminal"
        :commands="commands"
        @shell_output="prompt"
      ></v-shell>
    </template>
  </TerminalPreview>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TerminalPreview from "@/components/TerminalPreview.vue";
import { RegistrationChallengeService } from "@/core/Services/RegistrationChallenge/RegistrationChallengeService";
import { TrackingService } from "@/core/Services/TrackingService/TrackingService";

@Component({
  components: { TerminalPreview },
})
export default class ChallengeTerminal extends Vue {
  send_to_terminal = "";

  banner = {
    emoji: {},
    sign: "wpctf ~$",
  };
  commands = [
    {
      name: "list-commands",
      get(): string {
        return "Available commands:\nsingle-cat &lt;file-name&gt;\nls [file-name]";
      },
    },
  ];
  mounted(): void {
    this.send_to_terminal = "-------------------------------------------";
    setTimeout(() => {
      this.send_to_terminal = "Security protection enabled for flag.txt:";
      setTimeout(() => {
        this.send_to_terminal = "Use of string 'flag' in commands is denied.";
        setTimeout(() => {
          this.send_to_terminal = "-------------------------------------------";
        }, 5);
      }, 5);
    }, 5);
  }

  prompt(value: string): void {
    TrackingService.eventRegistrationShellCommand(value);
    const split_input = value.split(" ");
    const cmd = split_input[0];
    let argument = "";
    if (split_input.length > 1) {
      argument = split_input[1];
    }
    this.send_to_terminal = "";
    setTimeout(() => {
      let commandOutput = RegistrationChallengeService.shell_execute_command(
        cmd,
        argument
      );
      if (commandOutput.startsWith("solved:")) {
        const html = commandOutput.replace("solved:", "");
        this.$emit("challenge-solved", html);
      } else {
        this.send_to_terminal = commandOutput;
        // Scroll to the bottom of the shell, timeout is needed to have time to update the scrollHeight
        setTimeout(() => {
          const shellElement = document.querySelector(
            ".challenge-terminal .shell"
          );
          if (shellElement) {
            shellElement.scrollTo(0, shellElement.scrollHeight);
          }
        }, 0);
      }
    }, 0);
  }
}
</script>
<style lang="scss" scoped>
.challenge-terminal {
  box-shadow: 0px 0px 100px 0px #ff000033;
}
.shell {
  cursor: $cursor-text-red;
  width: 402px !important;
  height: 304px !important;
  overflow-y: auto;
  scrollbar-width: thin;
  overflow-x: hidden;
}
</style>

<style lang="scss">
.challenge-terminal {
  .input-line,
  pre {
    text-wrap: wrap;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    font-family: "ClassicConsoleNeue";
    font-size: 16px !important;
    line-height: 16px !important;
    color: $main-text-color;
  }

  #input-line {
    display: flex;
  }

  #banner {
    margin: 0 !important;
    p {
      color: $main-text-color !important;
      line-height: 16px !important;
      font-size: 16px !important;
    }
  }
  .prompt,
  .cmdline {
    color: $main-text-color !important;
    line-height: 16px !important;
    font-size: 16px !important;
  }

  .prompt {
    div {
      display: flex;
      align-items: center;
    }
  }

  pre {
    margin: 5px 0 !important;
    font-size: 16px !important;
    line-height: 16px !important;
  }
}
</style>
