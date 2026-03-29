<template>
  <div class="terminal">
    <div class="terminal__window">
      <div class="terminal__topbar">
        <div class="terminal__topbar--expand"><div class="inner"></div></div>
        <div class="terminal__topbar--spacer">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>

        <div class="terminal__topbar--title">Terminal</div>
        <div class="terminal__topbar--spacer">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="terminal__topbar--reduce">
          <div class="inner"><div class="corner"></div></div>
        </div>
        <div class="terminal__topbar--close">
          <div class="inner"><div class="line"></div></div>
        </div>
      </div>
      <div class="terminal__text--container">
        <slot name="terminal-content"></slot>
      </div>
      <div class="terminal__handle">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class TerminalPreview extends Vue {}
</script>
<style lang="scss" scoped>
.terminal {
  &__window {
    width: 412px;
    height: 344px;
    background: #545d5f;
    border: solid 1px black;
    box-shadow: -2px -2px 0px 0px #26262666 inset,
      2px 2px 0px 0px #2626261a inset;
    position: relative;
  }

  &__text--container {
    margin: 0 4px 14px;
    background: black;
    width: calc(100% - 8px);
    height: calc(100% - 38px);
    box-shadow: 1px 0px 0px 0px #262626 inset, -1px -1px 0px 0px #26262666;
  }

  &__topbar {
    display: flex;
    padding-left: 4px;
    height: 19px;
    padding-top: 3px;

    &--title {
      font-family: W95;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0.035em;
      color: black;
      padding-top: 1px;
    }

    &--expand,
    &--reduce,
    &--close {
      background: black;
      width: 13px;
      height: 13px;
      border-bottom: solid 1px #3f4f52;
      border-right: solid 1px #3f4f52;

      .inner {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: #394c50;
        border: 0;
        margin-top: 2px;
        margin-left: 2px;

        .corner {
          width: 6px;
          height: 6px;
          border-bottom: solid 1px black;
          border-right: solid 1px black;
        }

        .line {
          position: relative;
          top: 3px;
          width: 8px;
          height: 3px;
          border-bottom: solid 1px black;
          border-top: solid 1px black;
        }
      }
    }

    &--close {
      margin-left: 4px;
    }

    &--spacer {
      display: flex;
      flex-direction: column;
      width: 150px;
      margin-left: 4px;
      margin-right: 4px;

      .line {
        width: 100%;
        background: #394c50;
        height: 1px;
        margin-top: 1px;

        &:first-child {
          margin: 0;
        }
      }
    }

    &--title {
      width: 43px;
    }
  }

  &__handle {
    background: #3e4f52;
    width: 8px;
    height: 10px;
    position: absolute;
    bottom: 5px;
    right: 8px;
    transform: rotate(-225deg);

    .line {
      background: black;
      height: 1px;
      width: 100%;
      margin-bottom: 2px;
      opacity: 0.7;
    }
  }
}
</style>
