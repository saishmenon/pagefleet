<script>
    import { Button, Input, Label, SelectMenu} from 'figma-plugin-ds-svelte';
</script>

<p class="text-xs font-semibold">Select a template below to get started.</p>

<input type="text" value="⭐️ Cover"/>
<input type="text" value="🧑🏻‍💻 Development Ready"/>
<input type="text" value="🤖 Prototypes"/>
<input type="text" value="🌍 Designs"/>
<input type="text" value="🧩 Components"/>
<input type="text" value="✅ Research"/>
<input type="text" value="🧪 Playground"/>

<div class="buttons">
    <!-- <button class="button-primary">Create pages</button>
    <button class="button-secondary">Reset</button> -->
    <Button class="primary">Generate pages</Button>
    <Button class="secondary">Reset</Button>
</div>
