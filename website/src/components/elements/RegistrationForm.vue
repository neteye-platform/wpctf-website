<template>
  <div
      class="form-container success relative z-20 bg-terminal-bg/20 w-full xl:w-[40rem] text-terminal-text text-xl px-5 pb-4 pt-4 !leading-none backdrop-blur-sm formatted-text font-terminal"
  >
    <div
        class="d365-mkt-config"
        style="display:none"
        data-website-id="FjAfg30zDTg7KeMd5blTyifvK2GeX0IB5lLPeIGSWqs"
        data-hostname="44cba5f8ec554730aec68071c93050b6.svc.dynamics.com"
    ></div>
    <div data-form-block-id="4221c94f-5af3-ee11-904b-000d3ab8c619"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(()=> {
  setTimeout(() => {
    document?.querySelector('#registrationFormLoader')?.setAttribute(
        'src',
        'https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007'
    );
  }, 0)

})
</script>

<style lang="postcss">

div[data-form-block-id] .ui-menu .ui-loading-item{
  @apply !hidden;
}

.form-container.success{

  [data-section="true"] {
    @apply !p-0;
  }

  .columnContainer{
    @apply !p-0 text-xl !font-terminal;

    strong{
      @apply !font-normal;
    }

    & > div {
      @apply grid grid-cols-3 !font-normal !p-0;

      & > p {
        @apply col-span-1 !text-left;

        & + p {
          @apply col-span-2 !text-left opacity-40
        }
      }
    }
  }

  [data-editorblocktype] {
    @apply relative;

    .lp-required{
      @apply pl-1 relative !text-terminal-text/40 -top-0.5 !hidden
    }

    &:before {
      content:"";
      @apply absolute top-0 left-0 block h-[1px] opacity-25 right-0 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzY1RkYzMCIgZD0ibTguMTU2MywxbC02LjMxMjU5LDBsMCwtMWw2LjMxMjU5LDBsMCwxeiIgaWQ9InN2Z18yIi8+CiA8L2c+Cjwvc3ZnPg==')];
    }

    [data-layout="true"] > div{

      &:before {
        @apply !hidden;
      }
    }

    .marketing-field, .marketing-customfield{
      @apply col-span-3;

      & > .lp-form-field {
        @apply w-full grid grid-cols-3;

        label{
          @apply !font-terminal text-xl uppercase;
        }

        & > *{
          @apply col-span-1 relative flex items-center h-full py-2;

          &:after {
            content: "";
            @apply absolute top-0 bottom-0 m-auto h-[1rem] right-0 w-[2px] bg-terminal-text;
          }

        }

        input.lp-form-fieldInput:not(&[type="checkbox"]), textarea {
          @apply col-span-2 bg-transparent pl-4 !border-0 focus:!outline-0 focus:placeholder-transparent h-[2.75rem] placeholder-terminal-text/40;
          resize: none;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-background-clip: text;
          -webkit-text-fill-color: #65ff30;
        }

      }
    }

  }

  [data-editorblocktype="Text"] {

    &:first-child{
      &:before{
        @apply !hidden
      }
    }

    &:not(:first-child) {

      &:before{
        content: "";
        @apply !col-span-1 !relative !bg-transparent !h-0;
      }

      p{
        @apply !col-span-2 !text-terminal-text/50 !text-sm !leading-tight mb-2 pt-3 relative h-[4.3rem];
      }

      & + div + div[data-editorblocktype="Text"] {
        p{
          @apply h-[6.4rem];
        }
      }

    }
  }

  [data-editorblocktype="Field-checkbox"] {
    @apply relative h-[2rem];

    &:before{
      display: none;
    }

    .marketing-field{
      &:after {
        content:"";
        @apply absolute bottom-0 left-0 block h-[1px] opacity-25 right-0 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzY1RkYzMCIgZD0ibTguMTU2MywxbC02LjMxMjU5LDBsMCwtMWw2LjMxMjU5LDBsMCwxeiIgaWQ9InN2Z18yIi8+CiA8L2c+Cjwvc3ZnPg==')];
      }
    }

    .lp-form-field{
      @apply items-center grid-flow-col justify-end flex-row-reverse w-full before:hidden h-5 relative;

      .lp-ellipsis{
        @apply after:hidden
      }

      input{
        @apply order-2 !absolute left-[33.333333%] -top-1 !m-0 -z-10 !h-0 ;

        &:before{
          content: "[ ] ACCEPT";
          @apply absolute -left-1 right-[initial] top-0 !text-xl !bg-transparent z-20 !h-auto w-20 text-terminal-text;
        }

        &:after{
          content: "X" !important;
          @apply absolute !-left-1.5 !top-0 !text-xl !bg-transparent z-20 !h-auto !hidden;
        }

        &:checked{
          &:after{
            @apply !block;
          }
        }

      }

      label{
        @apply !pt-0 order-1 absolute -top-[4.2rem] !col-span-3 xl:cursor-pointer;

        &[title="Marketing"]{
          @apply !h-[6rem] flex items-start !leading-none;
        }

        &[title="Privacy"]{
          @apply !h-[7.8rem] flex items-start !leading-none -top-[6.2rem];
        }

      }
    }
  }

  [data-editorblocktype="SubmitButtonBlock"] {
    &:before{
      display: none;
    }

    p{
      @apply !col-span-3;

      button{
        @apply bg-terminal-text w-full !text-black uppercase flex justify-start items-start !px-3 !py-2 !h-20 mt-3 relative;

        &:after{
          content: ">";
          @apply text-black pl-2
        }

        &:hover{
          &:after{
            content: ">";
            @apply pl-3
          }
        }

      }

    }

  }

  [data-editorblocktype="Field-dropdown"] {

    &:after {
      content:"";
      @apply absolute bottom-0 left-0 block h-[1px] opacity-25 right-0 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzY1RkYzMCIgZD0ibTguMTU2MywxbC02LjMxMjU5LDBsMCwtMWw2LjMxMjU5LDBsMCwxeiIgaWQ9InN2Z18yIi8+CiA8L2c+Cjwvc3ZnPg==')];
    }

    .lp-form-field{
      @apply items-center
    }

    label.lp-ellipsis{
      @apply !leading-[1.1rem]
    }

    select{
      @apply !col-span-2 !h-8 !bg-transparent !rounded-none !pl-4 appearance-none !leading-[.8] !border-0 !outline-0;

      option{
        @apply bg-terminal-text !border-0 !text-black
      }

    }

  }

}

div[data-form-block-id] .onFormSubmittedFeedback {
  @apply !bg-transparent;
}

div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackMessage {
  @apply !text-white !font-terminal !text-4xl !p-0
}

div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackButton, div[data-form-block-id] .onFormSubmittedFeedbackIcon {
  display: none;
}

div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackInternalContainerStyle {
  @apply !p-0
}

div[data-form-block-id] .dialogProviderContainerStyle {
  background: transparent;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
