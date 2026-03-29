<template>
  <div ref="elementRef">
    <v-shell
      class="shell-registration backdrop-blur-sm hide-scrollbar"
      :class="{
        'hidden-password': isPassword,
        'input-visible': inputVisible,
      }"
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      @shell_output="prompt"
      @keyup.enter="scrollToBottom"
    >
    </v-shell>
  </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import TrackingService from "@/TrackingService/TrackingService";

const emit = defineEmits(['solved']);
let send_to_terminal = ref("");
let banner = ref({
  emoji: {},
  sign: "wpctf ~$",
});
let commands = [
  {},
];
let logged = false;
let isPassword = ref(false);
let user = "";
const elementRef = ref(null);
let observer: IntersectionObserver | null = null;
const inputVisible = ref(false);

onMounted(() => {
  const lines = [
    "Black Hat E-Corp Linux 11.25 (Ftcpw)",
    "Kernel 4.7.0-238.47.1.ecl11_25.x86_64 on an x86_128",
    "\n\n",
  ]
  printLines(lines)
  banner.value.sign = "wpctf24reg login: "

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      inputVisible.value = entry.isIntersecting;
      if (inputVisible.value) {
        const input = document.querySelector(".shell-registration input.cmdline[autofocus]") as HTMLElement;
        setTimeout(() => {
          input.focus({
            preventScroll: true
          });
        }, 0);
      }
    });
  });

  if (elementRef.value) {
    observer.observe(elementRef.value);
  }

  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n" +
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n" +
      "XX                                                                          XX\n" +
      "XX   MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMMMMMMMMMMMMssssssssssssssssssssssssssMMMMMMMMMMMMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMMMMMMMss'''                          '''ssMMMMMMMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMMMyy''                                    ''yyMMMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMyy''                                            ''yyMMMMMMMM   XX\n" +
      "XX   MMMMMy''                                                    ''yMMMMM   XX\n" +
      "XX   MMMy'                                                          'yMMM   XX\n" +
      "XX   Mh'                                                              'hM   XX\n" +
      "XX   -                                                                  -   XX\n" +
      "XX                                                                          XX\n" +
      "XX   ::                                                                ::   XX\n" +
      "XX   MMhh.        ..hhhhhh..                      ..hhhhhh..        .hhMM   XX\n" +
      "XX   MMMMMh   ..hhMMMMMMMMMMhh.                .hhMMMMMMMMMMhh..   hMMMMM   XX\n" +
      "XX   ---MMM .hMMMMdd:::dMMMMMMMhh..        ..hhMMMMMMMd:::ddMMMMh. MMM---   XX\n" +
      "XX   MMMMMM MMmm''      'mmMMMMMMMMyy.  .yyMMMMMMMMmm'      ''mmMM MMMMMM   XX\n" +
      "XX   ---mMM ''             'mmMMMMMMMM  MMMMMMMMmm'             '' MMm---   XX\n" +
      "XX   yyyym'    .              'mMMMMm'  'mMMMMm'              .    'myyyy   XX\n" +
      "XX   mm''    .y'     ..yyyyy..  ''''      ''''  ..yyyyy..     'y.    ''mm   XX\n" +
      "XX           MN    .sMMMMMMMMMss.   .    .   .ssMMMMMMMMMs.    NM           XX\n" +
      "XX           N`    MMMMMMMMMMMMMN   M    M   NMMMMMMMMMMMMM    `N           XX\n" +
      "XX            +  .sMNNNNNMMMMMN+   `N    N`   +NMMMMMNNNNNMs.  +            XX\n" +
      "XX              o+++     ++++Mo    M      M    oM++++     +++o              XX\n" +
      "XX                                oo      oo                                XX\n" +
      "XX           oM                 oo          oo                 Mo           XX\n" +
      "XX         oMMo                M              M                oMMo         XX\n" +
      "XX       +MMMM                 s              s                 MMMM+       XX\n" +
      "XX      +MMMMM+            +++NNNN+        +NNNN+++            +MMMMM+      XX\n" +
      "XX     +MMMMMMM+       ++NNMMMMMMMMN+    +NMMMMMMMMNN++       +MMMMMMM+     XX\n" +
      "XX     MMMMMMMMMNN+++NNMMMMMMMMMMMMMMNNNNMMMMMMMMMMMMMMNN+++NNMMMMMMMMM     XX\n" +
      "XX     yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy     XX\n" +
      "XX   m  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy  m   XX\n" +
      "XX   MMm yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy mMM   XX\n" +
      "XX   MMMm .yyMMMMMMMMMMMMMMMM     MMMMMMMMMM     MMMMMMMMMMMMMMMMyy. mMMM   XX\n" +
      "XX   MMMMd   ''''hhhhh       odddo          obbbo        hhhh''''   dMMMM   XX\n" +
      "XX   MMMMMd             'hMMMMMMMMMMddddddMMMMMMMMMMh'             dMMMMM   XX\n" +
      "XX   MMMMMMd              'hMMMMMMMMMMMMMMMMMMMMMMh'              dMMMMMM   XX\n" +
      "XX   MMMMMMM-               ''ddMMMMMMMMMMMMMMdd''               -MMMMMMM   XX\n" +
      "XX   MMMMMMMM                   '::dddddddd::'                   MMMMMMMM   XX\n" +
      "XX   MMMMMMMM-                                                  -MMMMMMMM   XX\n" +
      "XX   MMMMMMMMM                                                  MMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMy                                                yMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMy.                                            .yMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMMMy.                                        .yMMMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMMMMMy.                                    .yMMMMMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMMMMMMMs.                                .sMMMMMMMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMMMMMMMMMss.           ....           .ssMMMMMMMMMMMMMMMMMM   XX\n" +
      "XX   MMMMMMMMMMMMMMMMMMMMNo         oNNNNo         oNMMMMMMMMMMMMMMMMMMMM   XX\n" +
      "XX                                                                          XX\n" +
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n" +
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n" +
      "\n" +
      "    .o88o.                               o8o                .\n" +
      "    888 `\"                               `\"'              .o8\n" +
      "   o888oo   .oooo.o  .ooooo.   .ooooo.  oooo   .ooooo.  .o888oo oooo    ooo\n" +
      "    888    d88(  \"8 d88' `88b d88' `\"Y8 `888  d88' `88b   888    `88.  .8'\n" +
      "    888    `\"Y88b.  888   888 888        888  888ooo888   888     `88..8'\n" +
      "    888    o.  )88b 888   888 888   .o8  888  888    .o   888 .    `888'\n" +
      "   o888o   8\"\"888P' `Y8bod8P' `Y8bod8P' o888o `Y8bod8P'   \"888\"      d8'\n" +
      "                                                                .8bod8'\n" +
      "                                                                 `88'");
});

setTimeout(() => {
  console.log("==============================================================================");
  console.log("The world is a dangerous place, %cElliot%c, not because of those who do evil, but because of those who look on and do nothing.", "color:red;font-weight:bold;", "");
  console.log("Someone locked you out of the registration server and changed your password. Find it out.");
  console.log("==============================================================================");
}, 0);

onUnmounted(() => {
  if (observer && elementRef.value) {
    observer.unobserve(elementRef.value);
  }
});

function printLines(lines: string[]): void {
  const line = lines.shift()
  if (line !== undefined) {
    send_to_terminal.value = line;
  }

  if (lines.length) {
    setTimeout(() => {
      printLines(lines);
    }, 0);
  }

  scrollToBottom();
}

async function prompt(value: string): Promise<void> {
  if (logged) {
    TrackingService.eventRegistrationShellCommand(value);
    const split_input = value.split(" ");
    const cmd = split_input[0];
    let argument = "";
    if (split_input.length > 1) {
      argument = split_input[1];
    }
    const output = await (window as any).shell_execute_command(cmd, argument)

    if (output.startsWith("solved:")) {
      const html = output.replace("solved:", "");
      emit("solved", html);
      TrackingService.eventRegistrationSolved();
    } else {
      printLines(["", output]);
    }
  } else {
    if (!isPassword.value) {
      TrackingService.eventRegistrationUsernameInput(value)
      user = value;
      isPassword.value = true;
      banner.value.sign = "Password: "
      hideInputText();
    } else {
      TrackingService.eventRegistrationPasswordInput(value)
      showInputText();
      checkLogin(user, value);
    }
  }

  scrollToBottom();
}

// Scroll to the bottom of the shell, timeout is needed to have time to update the scrollHeight
function scrollToBottom(): void {
  setTimeout(() => {
    const shellElement = document.querySelector(
        ".shell-registration #container"
    );
    if (shellElement) {
      shellElement.scrollTo(0, shellElement.scrollHeight);
    }
  }, 0);
}

function hideInputText() {
  const input = document.querySelector(".shell-registration input.cmdline[autofocus]");
  (input as HTMLElement).style.opacity = "0"
}

function showInputText() {
  const input = document.querySelector(".shell-registration input.cmdline[autofocus]");
  (input as HTMLElement).style.opacity = "1"
}

async function checkLogin(user: string, password: string) {
  if (user.toLowerCase() !== "elliot") {
    printLines(["Login incorrect", "\n\n"]);
    restartLoginProcess();
    return;
  }

  disableInput();
  const passwordResult = await (window as any).check_password(password);
  const checkPasswordResult = (window as any).check_password_result;

  switch (passwordResult) {
    case checkPasswordResult.Match:
      loggedIn();
      break;
    case checkPasswordResult.Wrong:
    case checkPasswordResult.PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE:
      printLines(["Login incorrect", "\n\n"])
      restartLoginProcess()
      break;
  }
  enableInput();
}

function restartLoginProcess() {
  logged = false
  isPassword.value = false
  banner.value.sign = "wpctf24reg login: "
}

function loggedIn() {
  logged = true;
  banner.value.sign = "[elliot@wpctf24reg ~]$ "
  printLines(["Last login: Sat Nov 25 2023 09:00:47 on tty"]);
}

function disableInput() {
  const inputContainer = document.querySelector(".shell-registration #container > .input-line") as HTMLElement;
  inputContainer.style.visibility = "hidden";
  inputContainer.setAttribute("readonly", "true");
}

function enableInput() {
  const inputContainer = document.querySelector(".shell-registration #container > .input-line") as HTMLElement;
  inputContainer.style.visibility = "visible";
  inputContainer.setAttribute("readonly", "false");
  const input = document.querySelector(".shell-registration input.cmdline[autofocus]") as HTMLElement;
  input.focus();
}
</script>

<style lang="postcss" scoped>

</style>

<style lang="postcss">
.shell-registration {
  #input-line {
    display: flex;
  }

  #banner {
    display: none;
  }

  &.hidden-password input.cmdline:not([readonly]) {
    opacity: 0;
  }

  #container {
    @apply !bg-terminal-bg/20 relative !w-full text-terminal-text !px-5 !pb-4 !pt-4 backdrop-blur-sm !font-terminal h-96 xl:h-112 overflow-y-auto text-1.5xl xl:text-xl;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-moz-scrollbar {
      display: none;
    }
  }

  output,
  .cmdline,
  .prompt,
  pre {
    @apply !text-xl !leading-none !text-terminal-text !font-terminal;
  }

  .cmdline{
    @apply h-[1.25rem]
  }

  input[autofocus] {
    display: none;
  }

  &.input-visible input[autofocus] {
    display: inline-block;
  }
}
</style>
