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

        if(selectedTemplate.value === 'simple'){
            for(let page of pages.simple){
                let mi = document.createElement("input");
                mi.setAttribute('type', 'text');
                mi.setAttribute('value', page);
                mi.setAttribute('name', 'array[]');
                formFields.appendChild(mi);
            }
        }else if(selectedTemplate.value === 'intermediate'){
            for(let page of pages.intermediate){
                let mi = document.createElement("input");
                mi.setAttribute('type', 'text');
                mi.setAttribute('value', page);
                mi.setAttribute('name', 'array[]');
                formFields.appendChild(mi);
            }
        }else if(selectedTemplate.value === 'advanced'){
            for(let page of pages.advanced){
                let mi = document.createElement("input");
                mi.setAttribute('type', 'text');
                mi.setAttribute('value', page);
                mi.setAttribute('name', 'array[]');
                formFields.appendChild(mi);
            }
        }
    }

    function generateCustomPages(){
        let input = document.getElementsByName('array[]');
        for (let i = 0; i < input.length; i++) {
            let a = input[i];
            customPages.push(a.value);
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
        <Button class="secondary" bind:disabled={disabled}>Reset</Button>
    </div>
</div>

<style>
    .mr-2{
        margin-right: 4px;
    }
</style>
