<script>
    import { Button, Input, Label, SelectMenu} from 'figma-plugin-ds-svelte';
    import pages from '../data/pages';

    let menuItems = [
        { 'value': 'simple', 'label': 'Simple', 'selected': false },
        { 'value': 'intermediate', 'label': 'Intermediate ', 'selected': false },
        { 'value': 'advanced', 'label': 'Advanced', 'selected': false }
	];

    let selectedTemplate;
    let customPages = [];

    $: disabled = selectedTemplate === null;

    function handleChange(){
        let formField = document.getElementById('formFields');
        let fields = [];

        // Function to clear out existing fields before adding pages from the new template selection
        while(formField.firstChild){
            formField.removeChild(formField.firstChild);
        }

        if(selectedTemplate.value === 'simple'){
            for(let page of pages.simple){
                let mi = document.createElement("input");
                mi.setAttribute('type', 'text');
                mi.setAttribute('value', page);
                mi.setAttribute('name', 'array[]');
                fields.push(mi);
            }
        }else if(selectedTemplate.value === 'intermediate'){
            for(let page of pages.intermediate){
                let mi = document.createElement("input");
                mi.setAttribute('type', 'text');
                mi.setAttribute('value', page);
                mi.setAttribute('name', 'array[]');
                fields.push(mi);
            }
        }else if(selectedTemplate.value === 'advanced'){
            for(let page of pages.advanced){
                let mi = document.createElement("input");
                mi.setAttribute('type', 'text');
                mi.setAttribute('value', page);
                mi.setAttribute('name', 'array[]');
                fields.push(mi);
            }
        }
        for(let field of fields){
            console.log(field);
            formFields.appendChild(field);
        }
    }

    //Post function send the data to the TS file
    function generateCustomPages(){
        
        // This variable is an array to collect all the custom pages from the form 
        let input = document.getElementsByName('array[]');
        
        //Loop to go through all the input fields and add them to the input array. This is done here so that if any fields were edited that page name override is taken to generate the pages.
        for (let i = 0; i < input.length; i++) {
            let a = input[i];
            // Checking for empty page names. If any of the input fields are empty, we'll just ignore those values and not create those pages.
            if(a.value !== ''){
                customPages.push(a.value);
            }
        }

        parent.postMessage({ pluginMessage: {
            'type' : 'create-custom-pages',
            customPages,
        }},'*');
    }
</script>

<div class="flex mb-4 justify-between">
    <div class="basis-1/4">
        <Label>Choose template to edit</Label>
    </div>
    <div class="basis-3/4">
        <SelectMenu on:change={handleChange} bind:menuItems={menuItems} bind:value={selectedTemplate} class="mb-xxsmall"/>
    </div>
</div>

<div id="formFields">
    <!-- Custom fields will be created here -->
</div>

<div class="buttons">
    <div>
        <Button on:click={generateCustomPages} class="primary" bind:disabled={disabled}>Generate pages</Button>
    </div>
    <div class="mr-2">
        <Button on:click={handleChange} class="secondary" bind:disabled={disabled}>Reset</Button>
    </div>
</div>

<style>
    .mr-2{
        margin-right: 4px;
    }
</style>
