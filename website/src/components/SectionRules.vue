<template>
  <section id="rules" class="flex flex-col w-full xl:pr-10 py-20 xl:py-40 relative z-40 px-5 xl:px-0" data-scroll="rules">
    <div class="grid grid-cols-4 xl:grid-cols-8 w-full h-full">
      <div class="col-span-2 hidden xl:block"></div>
      <div class="col-span-4 xl:col-span-6 text-white flex flex-col">
        <h2 class="text-white text-7xl xl:text-7.5xl text-left font-alternate heading crt mb-7 xl:mb-0" data-content="Event Rules">
          Event Rules
        </h2>
        <p class="text-white/70 text-xl !leading-tight mb-10 items-center crt hidden xl:flex">
          <span>Navigate Rules using keyboard arrows</span>
          <span class="relative rotate-90 text-2xl inline-block pl-4 pr-3">&gt;</span>
          <span class="relative rotate-90 text-2xl inline-block pl-0.5">&lt;</span>
        </p>
        <div id="rules-terminal" class="w-full flex justify-center">
          <div class="bg-terminal-bg/20 relative h-[fit-content] w-full text-terminal-text text-1.5xl xl:text-xl px-3 pb-4 pt-4 backdrop-blur-sm formatted-text font-terminal">

            <div class="horizontal-divider mb-2 hidden xl:block"></div>

            <div class="grid grid-cols-12 text-terminal-text text-1.5xl xl:text-xl !leading-[1.2rem] pt-0.5 pb-1.5">
              <div class="col-span-12 grid grid-cols-12">
                <div class="col-span-3 xl:col-span-2 left-start">
                  #
                </div>
                <div class="col-span-9 xl:col-span-10 grid grid-cols-12">
                  <div class="col-span-11 left-start">
                    Rule
                  </div>
                  <div class="col-span-1 right-end text-right hidden xl:block">
                    SIZE
                  </div>
                </div>
              </div>
            </div>

            <div class="horizontal-divider my-1"></div>

            <div class="grid grid-cols-12 pt-1 xl:pb-2">

              <template
                  v-for="rule in rules"
                  :key="rule.id"
              >

                <div
                    class="col-span-12 grid grid-cols-12 text-terminal-text text-1.5xl xl:text-xl !leading-[1.2rem]"
                    :class="currentRuleIndex === rule.id && 'xl:bg-terminal-text xl:!text-black xl:cursor-pointer'"
                    @mouseover="currentRuleIndex = rule.id"
                >
                  <div class="col-span-3 xl:col-span-2 left-start" :class="currentRuleIndex === rule.id && 'xl:before:!hidden'">
                    {{ rule.id + 1 }} <span class="text-black hidden xl:inline" v-if="currentRuleIndex === rule.id">&gt;&gt;&gt;</span>
                  </div>
                  <div class="col-span-9 xl:col-span-10 grid grid-cols-12">
                    <div class="col-span-11 left-start">
                      {{ rule.title }}
                    </div>
                    <div class="col-span-1 right-end text-right hidden xl:block">
                      {{ rule.size }}
                    </div>
                  </div>
                </div>

                <div class="horizontal-divider col-span-12 my-2 xl:hidden"></div>

              </template>

            </div>

            <div class="horizontal-divider col-span-12 my-0 hidden xl:block"></div>

            <div class="grid grid-cols-12 text-terminal-text text-xl pb-2 xl:py-2">

              <div class="col-span-12 grid grid-cols-12 !leading-[1.2rem]">
                <div class="col-span-2 left-start hidden xl:block">
                  <br>
                  Description
                  <br><br><br><br><br><br><br><br><br><br><br><br><br>
                  Presented by
                  <br>
                  Würth Phoenix
                  <br>
                  <br>
                  <br>
                </div>
                <div class="col-span-6 grid-cols-12 hidden xl:grid">
                  <div class="col-span-11 left-start">
                    <br>
                    Rule #{{ currentRuleIndex + 1 }}
                    <br>
                    <br>
                    <br>
                    <span class="max-w-[46ch] block">
                      {{ rules[currentRuleIndex].description }}
                    </span>
                  </div>
                </div>
                <div class="col-span-12 xl:col-span-4 flex flex-col left-start after:hidden xl:after:block right-end !px-2 pt-6 xl:pt-0">
                  <pre class="flex-grow text-base xl:text-sm relative xl:bottom-[initial] -bottom-5">
  _      __             __  __
 | | /| / /_ _____ ____/ /_/ /
 | |/ |/ / // / -_) __/ __/ _ \
 |__/|__/\_,_/\__/_/  \__/_//_/
  / _ \/ /  ___  ___ ___  (_)_ __
 / ___/ _ \/ _ \/ -_) _ \/ /\ \ /
/_/  /_//_/\___/\__/_//_/_//_\_\
                  </pre>
                  <button type="button" class="text-terminal-text text-xl h-[3.6rem] !leading-[1.2rem] horizontal-divider col-span-12 flex-shrink-0 items-center justify-center pt-8 pb-6 group hidden xl:flex" @click="scrollPageTo('register')">
                    <span>&gt;</span>
                    <span class="px-2 xl:group-hover:px-1">APPLY</span>
                    <span>&lt;</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="horizontal-divider -mt-[0.1rem]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {inject, ref} from "vue";

  const rules = [
    {
      id: 0,
      title: "Teams compete to solve security-related challenges",
      size: "144 B",
      description: "Each team works independently to solve various challenges. Challenges will test knowledge in different areas of cybersecurity. A maximum of 5 people per team is allowed."
    },
    {
      id: 1,
      title: "WP CTF is a jeopardy style CTF",
      size: "180 B",
      description: "Challenges will be grouped into categories with specific focus areas like web exploitation, binary exploitation (pwn), reverse engineering, osint etc. Different challenges will require different skill sets."
    },
    {
      id: 2,
      title: "Points are awarded according to the difficulty of the challenge and how many people solved it.",
      size: "139 B",
      description: "Easy challenges will have lower point values and more complex challenges will have higher point values. The fewer teams solved the challenge the more points you get."
    },
    {
      id: 3,
      title: "No sharing of solutions with other teams.",
      size: "101 B",
      description: "Teams must not share answers or methods with others. Collaboration within the team is allowed, but not with other teams."
    },
    {
      id: 4,
      title: "No attacking other teams' systems or the event infrastructure is allowed",
      size: "128 B",
      description: "You can only target the systems provided specifically for the CTF. Any attacks on other teams or event infrastructure will result in disqualification."
    },
    {
      id: 5,
      title: "No use of automated scanning tools is allowed",
      size: "46 B",
      description: "Automated tools may flood systems and are disallowed."
    },
    {
      id: 6,
      title: "All tools and techniques must comply with the law.",
      size: "77 B",
      description: "You can only use legal methods and tools. Compliance with all applicable laws is mandatory."
    },
    {
      id: 7,
      title: "Collaboration within the team is encouraged; collusion between teams is prohibited.",
      size: "86 B",
      description: "Work together within your team to solve challenges. Working with other teams is considered cheating."
    },
    {
      id: 8,
      title: "Judges' decisions are final",
      size: "87 B",
      description: "Any disputes will be settled by the event judges. Their decision on scoring or any other issues is final."
    },
    {
      id: 9,
      title: "Follow our code of conduct to maintain a respectful environment",
      size: "101 B",
      description: "All participants must adhere to our code of conduct. This ensures a respectful, inclusive, and enjoyable event for all."
    },
    {
      id: 10,
      title: "The team with the highest score at the end of the event wins",
      size: "79 B",
      description: "Points are totaled at the end of the event. The team with the most points is declared the winner."
    },
  ];

  const currentRuleIndex = ref(0);

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 38) {
      e.preventDefault();
      currentRuleIndex.value == 0
          ? currentRuleIndex.value = (rules.length - 1)
          : currentRuleIndex.value--
    } else if (e.keyCode === 40) {
      e.preventDefault();
      currentRuleIndex.value == (rules.length - 1)
          ? currentRuleIndex.value = 0
          : currentRuleIndex.value++
    }
  });

  const emitter = inject('emitter');
  function scrollPageTo(target: string): void {
    // @ts-ignore
    emitter.emit('scrollTo', target);
  }

</script>

<style lang="postcss" scoped>

.horizontal-divider{
  @apply w-full h-[1px] relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzY1RkYzMCIgZD0ibTguMTU2MywxbC02LjMxMjU5LDBsMCwtMWw2LjMxMjU5LDBsMCwxeiIgaWQ9InN2Z18yIi8+CiA8L2c+Cjwvc3ZnPg==) 0 50%;
  }
}

.left-start{
  @apply relative pl-4;
  &:before {
    content: "";
    position: absolute;
    top: .1rem;
    height: 100%;
    left: 2px;
    width: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjNjVGRjMwIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4=) repeat-y 0 0;
    background-size: 1px 1.22rem;
  }
}

.right-end{
  @apply relative pr-4;
  &:after {
    content: "";
    position: absolute;
    top: .1rem;
    height: 100%;
    right: 2px;
    width: 1px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDE2Ij48cGF0aCBmaWxsPSIjNjVGRjMwIiBkPSJNMCAwaDF2MTJIMHoiLz48L3N2Zz4=) repeat-y 0 0;
    background-size: 1px 1.2rem;
  }
}

</style>
