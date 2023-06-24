<script>
    //import some Svelte Figma UI components
    import {
        Button,
        Label,
        Textarea,
        SelectMenu,
    } from "figma-plugin-ds-svelte";
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

    $: pageList = "";

    //this is a reactive variable that will return false when a value is selected from
    //the select menu, its value is bound to the primary buttons disabled prop
    $: disabled = pageList === null;

    // Function to dynamically create input fields
    function convertToString(value) {
        let arrayToString = value.toString();
        return arrayToString;
    }

    function stringToArray(inputString) {
        let wordsArray = inputString
            .split(",")
            .filter((word) => word.trim() !== "");
        return wordsArray;
    }

    // Function to handle change in in dropdown selection
    function handleChange(event) {
        switch (selectedTemplate.value) {
            case "simple":
                pageList = convertToString(pages.simple);
                break;
            case "intermediate":
                pageList = convertToString(pages.intermediate);
                break;
            case "advanced":
                pageList = convertToString(pages.advanced);
                break;
            case "default":
                break;
        }
    }

    // Function to generate custom pages
    function generateCustomPages() {
        let input = document.getElementById("pageslist");
        pageList = input.value;

        console.log(pageList);
        customPages = stringToArray(pageList);
        console.log(customPages);

        //Post function to send the data to the TS file
        parent.postMessage(
            {
                pluginMessage: {
                    type: "create-custom-pages",
                    customPages,
                },
            },
            "*"
        );
    }
</script>

<div>
    <Label>Choose a template to edit</Label>
    <SelectMenu
        on:change={handleChange}
        bind:menuItems
        bind:value={selectedTemplate}
        class="mb-xxsmall"
    />

    <p class="text-xs text-center font-medium text-gray-500">or</p>

    <Label>Enter list of pages</Label>
    <Textarea
        placeholder="Enter the names of pages seperated by commas"
        rows={8}
        bind:value={pageList}
        id="pageslist"
    />

    <div class="buttons">
        <div>
            <Button
                on:click={generateCustomPages}
                class="primary"
                bind:disabled>Generate pages</Button
            >
        </div>
    </div>
</div>
