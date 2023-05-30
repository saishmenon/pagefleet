<script>

	//import Global CSS from the svelte boilerplate
	//contains Figma color vars, spacing vars, utility classes and more
	import { GlobalCSS } from 'figma-plugin-ds-svelte';

	import "./PluginUI.css";
	import QuickStart from './components/QuickStart.svelte';
	import Custom from './components/Custom.svelte';
	import Add from './components/Add.svelte';


	let activeTab = 'Quickstart';

	function handleClick(e){
		let id = e.target.id;
		console.log("You selected " + id + " template");
	}
	

</script>


<div class="main">
	<div class="mb-4">
		<button class="tab-default" class:tab-active={activeTab === 'Quickstart'} on:click={() => activeTab = 'Quickstart'}>Quick start</button>
		<button class="tab-default" class:tab-active={activeTab === 'Custom'} on:click={() => activeTab = 'Custom'}>Custom</button>
		<button class="tab-default" class:tab-active={activeTab === 'Add'} on:click={() => activeTab = 'Add'}>Add</button>
	</div>

	{#if activeTab === 'Quickstart'}
		<QuickStart />
	{:else if activeTab === 'Custom'}
		<Custom />
	{:else if activeTab === 'Add'}
		<Add />
	{/if}
</div>

<style>

/* Add additional global or scoped styles here */

</style>