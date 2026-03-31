<template>
  <section
    id="rules"
    class="flex flex-col w-full xl:pr-10 relative z-40 px-5 xl:px-0 pt-32 pb-32 md:pt-40 md:pb-40"
    data-scroll="rules"
  >
    <div class="grid grid-cols-4 xl:grid-cols-8 w-full h-full">
      <div class="col-span-2 hidden xl:block"></div>
      <div class="col-span-4 xl:col-span-6 text-white flex flex-col">
        <h2
          class="text-terminal-main text-shadow-glow text-7xl xl:text-7.5xl text-left font-W95FA heading mb-7 xl:mb-0"
          data-content="Event Rules"
        >
          Event Rules
        </h2>
        <p
          class="text-terminal-secondary text-xl !leading-tight mb-10 items-center hidden xl:flex text-shadow-glow-low"
        >
          <span>Navigate Rules using keyboard arrows</span>
          <span class="relative rotate-90 text-2xl inline-block pl-4 pr-3">&gt;</span>
          <span class="relative rotate-90 text-2xl inline-block pl-0.5">&lt;</span>
        </p>
      </div>
    </div>
    <div class="grid grid-cols-4 xl:grid-cols-8 w-full h-full">
      <div class="col-span-1 hidden xl:block"></div>
      <div
        id="rules-terminal"
        class="col-span-4 xl:col-span-6 w-full flex justify-center text-shadow-glow-medium"
      >
        <div
          class="bg-terminal-bg/10 border border-terminal-text/30 shadow-[inset_0px_0px_60px_#FF139C1A] relative h-[fit-content] w-full text-terminal-text text-1.5xl xl:text-xl px-3 pb-4 pt-4 backdrop-blur-sm formatted-text font-terminal"
        >
          <div class="horizontal-divider mb-2 hidden xl:block"></div>

          <div
            class="grid grid-cols-12 text-terminal-text text-1.5xl xl:text-xl !leading-[1.2rem] pt-0.5 pb-1.5"
          >
            <div class="col-span-12 grid grid-cols-12">
              <div class="col-span-3 xl:col-span-2 left-start">#</div>
              <div class="col-span-9 xl:col-span-10 grid grid-cols-12">
                <div class="col-span-11 left-start">Rule</div>
                <div class="col-span-1 right-end text-right hidden xl:block">SIZE</div>
              </div>
            </div>
          </div>

          <div class="horizontal-divider my-1"></div>

          <div class="grid grid-cols-12 pt-1 xl:pb-2">
            <template v-for="rule in rules" :key="rule.id">
              <div
                class="col-span-12 grid grid-cols-12 text-terminal-text text-1.5xl xl:text-xl !leading-[1.2rem]"
                :class="
                  currentRuleIndex === rule.id &&
                  'xl:bg-terminal-text xl:!text-black xl:cursor-pointer'
                "
                @mouseover="currentRuleIndex = rule.id"
              >
                <div
                  class="col-span-3 xl:col-span-2 left-start"
                  :class="currentRuleIndex === rule.id && 'xl:before:!hidden'"
                >
                  {{ rule.id + 1 }}
                  <span class="text-black hidden xl:inline" v-if="currentRuleIndex === rule.id"
                    >&gt;&gt;&gt;</span
                  >
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
                <br />
                Description
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                Presented by
                <br />
                Würth IT Italy
                <br />
                <br />
                <br />
              </div>
              <div class="col-span-6 grid-cols-12 hidden xl:grid">
                <div class="col-span-11 left-start">
                  <br />
                  Rule #{{ currentRuleIndex + 1 }}
                  <br />
                  <br />
                  <br />
                  <span class="max-w-[46ch] block">
                    {{ rules[currentRuleIndex]?.description }}
                  </span>
                </div>
              </div>
              <div
                class="col-span-12 xl:col-span-4 flex flex-col left-start after:hidden xl:after:block right-end !px-2 pt-6 xl:pt-0"
              >
                <pre class="flex-grow text-base xl:text-sm relative xl:bottom-[initial] -bottom-5">
 _       ___   _      __  __        __________
| |     / (_) (_)____/ /_/ /_      /  _/_  __/
| | /| / / / / / ___/ __/ __ \     / /  / /
| |/ |/ / /_/ / /  / /_/ / / /    / /  / /
|__/|__/\__,_/_/   \__/_/ /_/   /___/ /_/

    __________      __
   /  _/_  __/___ _/ /_  __
   / /  / / / __ `/ / / / /
 _/ /  / / / /_/ / / /_/ /
/___/ /_/  \__,_/_/\__, /
                  /____/

                  </pre
                >
                <button
                  type="button"
                  class="text-terminal-text text-xl h-[3.6rem] !leading-[1.2rem] horizontal-divider col-span-12 flex-shrink-0 items-center justify-center pt-8 pb-6 group hidden xl:flex text-shadow-glow-medium"
                  @click="scrollPageTo('register')"
                >
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
    <div class="grid grid-cols-4 xl:grid-cols-8 w-full mt-10">
      <div class="text-terminal-text text-shadow-glow-low flex flex-col items-end col-span-4 xl:col-span-7"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'

const rules = [
  {
    id: 0,
    title: 'Compete - Teams will tackle a series of security-related.',
    size: '144 B',
    description:
      'Each team works independently to solve a variety of cybersecurity challenges. A maximum of five people per team is allowed.'
  },
  {
    id: 1,
    title: 'The format - WP CTF follows a Jeopardy-style format.',
    size: '180 B',
    description:
      'Challenges are grouped into categories that focus on different areas of cybersecurity, such as web exploitation, binary exploitation (pwn), reverse engineering, OSINT, and more. Each challenge requires different skill sets.'
  },
  {
    id: 2,
    title:
      'Scoring system – Points are awarded based on challenge difficulty and the number of teams that solve them.',
    size: '139 B',
    description:
      'Easier challenges will award fewer points, while more complex ones will grant higher points. The fewer teams that solve a challenge, the more points it will be worth.'
  },
  {
    id: 3,
    title: 'Play fair – Sharing solutions with other teams is strictly prohibited.',
    size: '101 B',
    description:
      'Teams must not share answers, methods, or hints with others. Collaboration is allowed only within the team and not between different teams.'
  },
  {
    id: 4,
    title:
      "Respect the environment – Attacking other teams' systems or the event infrastructure is not allowed.",
    size: '128 B',
    description:
      'Participants are only allowed to target the systems provided specifically for the CTF. Any attempt to attack other teams or the event infrastructure will lead to disqualification.'
  },
  {
    id: 5,
    title:
      'Act responsibly – Disruptive actions that affect availability or fairness are not allowed.',
    size: '46 B',
    description:
      'Any action that disrupts the competition, affects its availability, or degrades the experience for others is not allowed'
  },
  {
    id: 6,
    title: 'Stay legal – All tools and techniques used must comply with the law.',
    size: '77 B',
    description:
      'Only legal methods and tools may be used during the competition. Compliance with all applicable laws is mandatory.'
  },
  {
    id: 7,
    title:
      'Teamwork is key – Collaboration within your team is encouraged, but collusion between teams is not.',
    size: '86 B',
    description:
      'Working together within your team is encouraged. However, collaborating with other teams is considered cheating and is strictly prohibited.'
  },
  {
    id: 8,
    title: 'Judges have the final say – All decisions made by the judges are final.',
    size: '87 B',
    description:
      'Any disputes or concerns regarding the competition will be resolved by the event judges. Their decisions regarding scoring and any other issues are final.'
  },
  {
    id: 9,
    title:
      'Respect & integrity – Follow our Code of Conduct to ensure a respectful and fair competition.',
    size: '101 B',
    description:
      'All participants must adhere to the event’s Code of Conduct to ensure a respectful, inclusive, and enjoyable experience for everyone.'
  },
  {
    id: 10,
    title: 'Victory awaits – The team with the highest score at the end of the event wins.',
    size: '79 B',
    description:
      'At the end of the event, all points will be totaled. The team with the highest score will be declared the winner.'
  }
]

const currentRuleIndex = ref(0)

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 38) {
    e.preventDefault()
    currentRuleIndex.value == 0
      ? (currentRuleIndex.value = rules.length - 1)
      : currentRuleIndex.value--
  } else if (e.keyCode === 40) {
    e.preventDefault()
    currentRuleIndex.value == rules.length - 1
      ? (currentRuleIndex.value = 0)
      : currentRuleIndex.value++
  }
})

const emitter = inject('emitter')
function scrollPageTo(target: string): void {
  // @ts-ignore
  emitter.emit('scrollTo', target)
}
</script>

<style lang="postcss" scoped>
.horizontal-divider {
  @apply w-full h-[1px] relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: repeating-linear-gradient(90deg, #E713FF 0, #E713FF 6.3px, transparent 6.3px, transparent 10px);
  }
}

.left-start {
  @apply relative pl-4;
  &:before {
    content: '';
    position: absolute;
    top: 0.1rem;
    height: 100%;
    left: 2px;
    width: 1px;
    background: repeating-linear-gradient(180deg, #E713FF 0, #E713FF 12px, transparent 12px, transparent 16px);
  }
}

.right-end {
  @apply relative pr-4;
  &:after {
    content: '';
    position: absolute;
    top: 0.1rem;
    height: 100%;
    right: 2px;
    width: 1px;
    background: repeating-linear-gradient(180deg, #E713FF 0, #E713FF 12px, transparent 12px, transparent 16px);
  }
}

.link-svg:hover svg path {
  @apply fill-white;
}

.link-svg svg path {
  @apply fill-terminal-text;
}
</style>
