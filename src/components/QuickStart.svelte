<script>
    import TemplateStore from "../store/TemplateStore";

    let templates = [];
    let stringifiedTemplates;

    TemplateStore.subscribe((data) => {
        templates = data;
        stringifiedTemplates = JSON.stringify(templates);
    });

    // console.log(`stringified Templates: ${stringifiedTemplates}`);

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

    function deleteTemplate(name) {
        console.log(templates);
        templates = templates.filter((template) => template.name !== name);
        console.log(templates);
    }
</script>

<p class="text-xs mb-4">Select a template below to get started.</p>

<div class="flex justify-between mb-6">
    <button
        on:click={createPages}
        id="simple"
        class="template-option">Simple</button
    >
    <button
        on:click={createPages}
        id="intermediate"
        class="template-option">Medium</button
    >
    <button
        on:click={createPages}
        id="advanced"
        class="template-option">Advanced</button
    >
</div>

<p class="text-xs mb-4">Saved Templates</p>
{#if templates.length === 0}
    <div class="flex justify-center">
        <p class="mb-4 text-xs">No templates saved yet.</p>
    </div>
{:else}
    <div class="flex flex-col">
        {#each templates as template}
            <div
                class="flex flex-col border-2 bg-white border-gray-100 rounded-md px-2 py-2 mb-2 hover:bg-gray-100 hover:cursor-pointer"
                on:click={deleteTemplate(template.name)}
            >
                <p class="text-sm font-medium">{template.name}</p>
                <p class="text-xs truncate">{template.pages}</p>
            </div>
        {/each}
    </div>
{/if}
