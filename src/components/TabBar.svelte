<script>
  import { GlobalCSS, IconButton, IconPlus } from "figma-plugin-ds-svelte";
  import { mainSection } from "../scripts/stores.js";
</script>

<div class="text-xs tab-container">
  <div class="p-4">
    <span
      class="tab"
      tabNumber="1"
      on:click={() => mainSection.set("quickstart")}
      class:active={$mainSection === "quickstart"}
    >
      Quick start
    </span>
    <!-- <span
            class="tab"
            tabNumber="2"
            on:click={() => mainSection.set("custom")}
            class:active={$mainSection === "custom"}
        >
            Custom
        </span> -->
    <span
      class="tab"
      tabNumber="2"
      on:click={() => mainSection.set("new")}
      class:active={$mainSection === "new"}
    >
      New
    </span>
  </div>
</div>

<style>
  .tab-container {
    box-shadow: 0px 1px 0px var(--figma-color-border);
  }

  .tab {
    font-family: var(--font-stack);
    font-size: var(--font-size-xsmall);
    line-height: var(--font-line-height);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--font-letter-spacing-pos-small);
    color: var(--figma-color-text-secondary);
    padding-right: var(--size-xsmall);
    cursor: default;
    user-select: none;
  }

  .tab:hover {
    color: var(--figma-color-text);
  }

  .active {
    color: var(--figma-color-text);
  }
</style>
