<script>
  //import some Svelte Figma UI components
  import { Button, Input, Label, SelectMenu } from "figma-plugin-ds-svelte";
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

  // Function to dynamically create input fields
  function createField(value) {
    let mi = document.createElement("input");
    mi.setAttribute("type", "text");
    mi.setAttribute("value", value);
    mi.setAttribute("name", "array[]");
    loadedTemplateFields.push(mi);
  }

  // Function to clear out existing fields before adding pages from the new template selection
  function clearFields(id) {
    id.innerHTML = "";
  }

  // Function to handle change in in dropdown selection
  function handleChange() {
    const id = document.getElementById("formFields");

    // Clearing out the fields to make room for new ones
    clearFields(id);
    // Emptying loadedTemplateFields array to remove previous values
    loadedTemplateFields = [];
    // console.log(formField.innerHTML);
    // formField.innerHTML = '';
    // console.log('cleared');

    if (selectedTemplate.value === "simple") {
      for (let page of pages.simple) {
        createField(page);
      }
    } else if (selectedTemplate.value === "intermediate") {
      for (let page of pages.intermediate) {
        createField(page);
      }
    } else if (selectedTemplate.value === "advanced") {
      for (let page of pages.advanced) {
        createField(page);
      }
    }

    //add input fields with the pages names for the current selected template
    for (let field of loadedTemplateFields) {
      id.appendChild(field);
    }
  }

  // Function to generate custom pages
  function generateCustomPages() {
    // This variable is an array to collect all the custom pages from the form
    let input = document.getElementsByName("array[]");

    //Loop to go through all the input fields and add them to the input array. This is done here so that if any fields were edited that page name override is taken to generate the pages.
    for (let i = 0; i < input.length; i++) {
      let a = input[i];
      // Checking for empty page names. If any of the input fields are empty, we'll just ignore those values and not create those pages.
      if (a.value !== "") {
        customPages.push(a.value);
      }
    }

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

<div class="flex mb-4 justify-between">
  <div class="basis-1/4">
    <Label>Choose template to edit</Label>
  </div>
  <div class="basis-3/4">
    <SelectMenu
      on:change={handleChange}
      bind:menuItems
      bind:value={selectedTemplate}
      class="mb-xxsmall"
    />
  </div>
</div>

<div id="formFields">
  <!-- Custom fields will be created here -->
</div>

<div class="buttons">
  <div>
    <Button on:click={generateCustomPages} class="primary" bind:disabled
      >Generate pages</Button
    >
  </div>
  <div class="mr-2">
    <Button on:click={handleChange} class="secondary" bind:disabled
      >Reset</Button
    >
  </div>
</div>

<style>
  .mr-2 {
    margin-right: 4px;
  }
</style>
