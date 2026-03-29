<template>
  <div class="sign-up-form">
    <div class="sign-up-form-content">
      <div class="sign-up-form-title">
        <div class="sign-up-form-title-main">
          WP CTF 2023 <br />Registration Form
        </div>
        <div class="sign-up-form-title-description">
          All fields are required. After submitting the form, we will email you
          the rest of the event details.
        </div>
      </div>
      <div id="form-container"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class RegistrationForm extends Vue {
  @Prop() public formHtml!: string;

  mounted(): void {
    const containerElement = window.document.querySelector("#form-container");
    if (containerElement) {
      containerElement.innerHTML = this.formHtml;
      // @ts-ignore
      Vue.loadScript(
        "https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"
      );
    } else {
      console.error("ERROR: #form-container element not present!");
    }
  }
}
</script>
<style lang="scss">
$input-bg-color: rgba(231, 0, 28, 0.15);
$input-bg-color-hover: #e7001c40;
$input-bg-color-focus: #3a0409;
$input-color: rgb(222, 222, 222);
$input-placeholder-color: #e7001c66;
$input-placeholder-color-hover: #e7001ccc;
$text-color: #e7001c;
$description-color: rgba(231, 0, 28, 0.6);

.sign-up-form {
  background-color: black;
  background-image: url("../assets/images/bg/registrationForm-bg.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  overflow-y: auto;

  .onFormSubmittedFeedback {
    background: transparent !important;
    height: auto !important;
  }

  p {
    cursor: $cursor-default-red;
  }

  .columnContainer,
  .emptyContainer {
    padding: 0 !important;
  }

  &-content {
    max-width: 440px;
    padding: 80px 20px 160px 20px;
  }
  &-title {
    margin-bottom: 60px;
    &-main {
      color: $text-color;
      font-family: "W95FA";
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 20px;
    }
    &-description {
      color: $description-color;
      font-family: "W95FA";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  #form-container {
    padding-bottom: 60px;
  }

  form {
    label {
      color: $text-color;
      font-family: "W95FA";
      font-size: 16px;
      cursor: $cursor-pointer-red;
    }
    textarea {
      padding-top: 15px;
    }
    input,
    textarea {
      border: 2px solid transparent;
      background: $input-bg-color;
      color: $input-color;
      font-family: "W95FA";
      margin-top: 4px;
      margin-bottom: 30px;
      padding-left: 14px;
      width: 100%;
      height: 40px;

      &[type="checkbox"] {
        padding: 0;
        height: initial;
        width: initial;
        margin-bottom: 0;
        display: none;

        & + label {
          position: relative;

          &::before {
            content: "";
            -webkit-appearance: none;
            background: $input-bg-color;
            border: 2px solid $text-color;
            padding: 10px;
            display: inline-block;
            position: relative;
            vertical-align: middle;
            cursor: $cursor-pointer-red !important;
            margin-right: 20px;
          }
        }

        &:checked + label:after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 9px;
          width: 6px;
          height: 13px;
          border: solid $text-color;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
      &::placeholder {
        color: $input-placeholder-color;
        opacity: 1;
      }

      &:focus-visible,
      &:focus {
        outline: none;
        border: 2px solid $text-color;
        background: $input-bg-color-focus;
      }

      &:hover {
        background: $input-bg-color-hover;
        &::placeholder {
          color: $input-placeholder-color-hover;
          opacity: 1;
        }
      }
    }
    button {
      margin-top: 30px;
      width: 100%;
      padding: 13px 14px 52px 14px;
      text-align: left;
      border: none;
      margin-bottom: 2px;
      font-family: "W95FA";
      font-size: 16px;
      cursor: $cursor-pointer-red !important;

      &[type="submit"] {
        background-color: $text-color;
        color: black;
      }
      &[type="reset"] {
        background: $input-bg-color;
        color: $text-color;
      }
      &:focus {
        outline: 2px dashed $text-color;
      }
    }
    .lp-form-header {
      margin-bottom: 30px;
    }
    div[data-editorblocktype="Text"] {
      color: rgba(231, 0, 28, 0.7);
      font-family: "W95FA";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 30px;
      margin-bottom: 16px;
      &:hover {
        color: #e7001c;
      }
    }
  }
  .onFormSubmittedFeedbackButton {
    background-color: $text-color !important;
    color: black !important;
    border: 0 !important;
    border-radius: 0 !important;
  }
  [data-submissionresponse="success"] {
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 50px;
      display: block;
      top: 0;
      left: calc(50% - 8px);
      border: solid $text-color;
      border-width: 0 6px 6px 0;
      transform: rotate(45deg);
    }
  }
  .onFormSubmittedFeedback {
    position: relative;
  }
  .onFormSubmittedFeedbackIcon {
    opacity: 0 !important;
    height: 0 !important;
  }
}
</style>
