<script>
    //import Global CSS from the svelte boilerplate
    //contains Figma color vars, spacing vars, utility classes and more
    import { GlobalCSS } from "figma-plugin-ds-svelte";

    //import some Svelte Figma UI components
    import { Button, Input, Label, SelectMenu } from "figma-plugin-ds-svelte";
    import "./PluginUI.css";
    import QuickStart from "./components/QuickStart.svelte";
    import TabBar from "./components/TabBar.svelte";
    import { mainSection } from "./scripts/stores.js";
    import Custom from "./components/Custom.svelte";

    function handleClick(e) {
        let id = e.target.id;
        console.log("You selected " + id + " template");
    }
</script>

<div>
    <TabBar />
    <div class="main">
        {#if $mainSection === "quickstart"}
            <QuickStart />
        {:else if $mainSection === "custom"}
            <Custom />
        {/if}
    </div>
</div>

<style>
    /* Add additional global or scoped styles here */
</style>
