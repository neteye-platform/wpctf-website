<template>
  <div class="scoreboard" ref="scoreboard_point" id="scoreboard__scroll-point">
    <div class="container">
      <div class="scoreboard_content">
        <div class="scoreboard__title">Scoreboard</div>
        <div class="scoreboard__chart">
          <img
            class="scoreboard__chart-image"
            src="~@/assets/images/score_chart.png"
            alt="Score chart"
          />
        </div>
        <div class="scoreboard__results">
          <div class="scoreboard__item" v-for="team in teams" :key="team.place">
            <div class="scoreboard__place">{{ team.place }}</div>
            <div class="scoreboard__team">{{ team.team }}</div>
            <div class="scoreboard__team">{{ team.score }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ScoreboardTable extends Vue {
  get teams(): { place: number; team: string; score: string }[] {
    return [
      { place: 1, team: "Pearak", score: "2125" },
      { place: 2, team: "Mariia", score: "1650" },
      { place: 3, team: "Cyb3rM0nk3ys", score: "1460" },
      { place: 4, team: "pwnlentoni", score: "1410" },
      { place: 5, team: "H4ckan3derl1", score: "1290" },
      { place: 6, team: "SpaghEt", score: "1025" },
      { place: 7, team: "sfogliatelle", score: "590" },
      { place: 8, team: "!TheWinners", score: "345" },
      { place: 9, team: "Bahmut", score: "320" },
      { place: 10, team: "cod3bust3rs", score: "145" },
      { place: 11, team: "CTF-1.13", score: "125" },
      { place: 12, team: "Ninja", score: "125" },
      { place: 13, team: "univr.exe", score: "75" },
      { place: 14, team: "Come Unzipped", score: "40" },
    ];
  }
}
</script>

<style lang="scss" scoped>
.scoreboard {
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
    @include breakpoint(medium) {
      font-size: 71px;
      margin-bottom: 100px;
    }
    @include breakpoint(small) {
      font-size: 71px;
      margin-bottom: 100px;
    }
  }
  &__chart {
    max-width: 1077px;
    width: 100%;
    margin: 0 auto;
    &-image {
      width: 100%;
    }
  }
  &__results {
    padding: 35px;
    display: flex;
    flex-direction: column;
    max-width: 1077px;
    width: 100%;
    margin: 0 auto;
  }
  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-top: 20px;
    border-bottom: 2px solid #0e1313;
  }
  &__place,
  &__team,
  &__score {
    font-family: "VT323";
  }
  &__place {
    font-size: 26px;
  }
  &__team,
  &__score {
    font-size: 22px;
  }
}
</style>
