<script>
    import pages from "../data/pages.js";

    //import images
    import Simple from "../assets/Simple";
    import Intermediate from "../assets/Intermediate";
    import Advanced from "../assets/Advanced";

    // Function to send the template selected to the TS file
    function createPages(e) {
        parent.postMessage(
            {
                pluginMessage: {
                    type: "create-pages",
                    template: e.target.id,
                },
            },
            "*"
        );
    }
</script>

<p class="text-xs mb-4">Select a template below to get started.</p>
<div class="flex flex-wrap">
    <button
        on:click={createPages}
        id="simple"
        class="template-option-simple"
    >
        Simple</button
    >
    <button
        on:click={createPages}
        id="intermediate"
        class="template-option-intermediate">Intermediate</button
    >
    <button
        on:click={createPages}
        id="advanced"
        class="template-option-advanced">Advanced</button
    >
</div>
