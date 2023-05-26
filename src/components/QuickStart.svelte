<script>
    import pages from '../data/pages.js';

    // Function to send the template selected to the TS file
    function createPages(e){
        parent.postMessage({ pluginMessage: {
            'type' : 'create-pages',
            'template' : e.target.id,
        }},'*');
    }
</script>

<p class="text-xs mb-4">Select a template below to get started.</p>
	
<div class="flex flex-wrap">
    <button on:click={createPages} id="simple" class="template-option">Simple</button>
    <button on:click={createPages} id="intermediate" class="template-option">Intermediate</button>
    <button on:click={createPages} id="advanced" class="template-option">Advanced</button>
</div>