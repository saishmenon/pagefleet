<script>
    import pages from '../data/pages.js';

    function handleClick(e){
        if(e.target.id === "simple"){
            for(let i=0; i<pages.simple.length; ++i){
                console.log(pages.simple[i]);
            }
        }else if(e.target.id === "intermediate"){
            for(let i=0; i<pages.intermediate.length; ++i){
                console.log(pages.intermediate[i]);
            }
        }else if(e.target.id === "advanced"){
            for(let i=0; i<pages.advanced.length; ++i){
                console.log(pages.advanced[i]);
            }
        }
    }
</script>

<p class="text-xs mb-4">Select a template below to get started.</p>
	
<div class="flex flex-wrap">
    <button on:click={handleClick} id="simple" class="template-option">Simple</button>
    <button on:click={handleClick} id="intermediate" class="template-option">Intermediate</button>
    <button on:click={handleClick} id="advanced" class="template-option">Advanced</button>
</div>