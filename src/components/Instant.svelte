<script>
    //import some Svelte Figma UI components
    import { Button, Textarea, SelectMenu } from "figma-plugin-ds-svelte";
    //import data for page names
    import pages from "../data/pages";

    //menu items, this is an array of objects to populate to our select menus
    let menuItems = [
        { value: "simple", label: "Simple", selected: false },
        { value: "intermediate", label: "Intermediate ", selected: false },
        { value: "advanced", label: "Advanced", selected: false },
    ];

    // Store the value of the selected template
    let selectedTemplate;
    // Store the names of all the new pages that needs to be created.
    let customPages = [];
    // Store the names of pages in selected template
    let loadedTemplateFields = [];

    //this is a reactive variable that will return false when a value is selected from
    //the select menu, its value is bound to the primary buttons disabled prop
    $: disabled = selectedTemplate === null;
</script>

<div>
    <SelectMenu
        bind:menuItems
        bind:value={selectedTemplate}
    />

    <Textarea
        placeholder="Enter the names of pages seperated by commas"
        rows={8}
    />
</div>
