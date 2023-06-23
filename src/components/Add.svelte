<script>
    //import some Svelte Figma UI components
    import { Button, Input, Label, Textarea } from "figma-plugin-ds-svelte";
    import { TemplateStore } from "../store/TemplateStore";

    let templateName;
    let templatePages;

    function saveTemplate() {
        let template = {
            name: templateName,
            pages: templatePages,
        };

        // let template = [
        //     {
        //         id: 1,
        //         name: "Book A",
        //         pages: "Introduction, Chapter 1, Conclusion",
        //     },
        //     {
        //         id: 2,
        //         name: "Book B",
        //         pages: "Prologue, Chapter 1, Epilogue",
        //     },
        //     {
        //         id: 3,
        //         name: "Book C",
        //         pages: "Preface, Chapter 1, Appendix",
        //     },
        //     {
        //         id: 4,
        //         name: "Book D",
        //         pages: "Foreword, Chapter 1, Glossary",
        //     },
        // ];

        TemplateStore.update((TemplateStore) => [...TemplateStore, template]);

        parent.postMessage(
            {
                pluginMessage: {
                    type: "save-template",
                    template: JSON.stringify(template),
                },
            },
            "*"
        );
    }
</script>

<div>
    <Label>Name</Label>
    <Input
        bind:value={templateName}
        placeholder="Template name"
    />

    <Label>List of pages</Label>
    <textarea
        bind:value={templatePages}
        rows="8"
        placeholder="Enter list of page names separated by a comma.
    Eg.
    Cover,
    Goals,
    Designs,
    Prototypes
    "
    />

    <div class="buttons">
        <div>
            <Button
                class="primary"
                on:click={saveTemplate}>Add</Button
            >
        </div>
        <!-- <div class="mr-2">
            <Button class="secondary">Cancel</Button>
        </div> -->
    </div>
</div>
