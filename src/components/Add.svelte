<script>
    //import some Svelte Figma UI components
    import { Button, Input, Label, Textarea} from 'figma-plugin-ds-svelte';
    import TemplateStore from '../store/TemplateStore';
    
    let templateName;
    let templatePages;

    function handleClick(){
        let template = {
            name: templateName,
            pages: templatePages
        };
        TemplateStore.update(TemplateStore => [...TemplateStore, template]);
    }
</script>

<div>
    <Label>Name</Label>
    <Input bind:value={templateName} placeholder="Template name"></Input>
    
    <Label>List of pages</Label>
    <textarea bind:value={templatePages} rows="8" placeholder="Enter list of page names separated by a comma.
    Eg.
    Cover,
    Goals,
    Designs,
    Prototypes
    "></textarea>

    <div class="buttons">
        <div>
            <Button class="primary" on:click={handleClick}>Add</Button>
        </div>
        <!-- <div class="mr-2">
            <Button class="secondary">Cancel</Button>
        </div> -->
    </div>
</div>