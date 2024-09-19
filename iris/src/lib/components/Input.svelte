<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";

    export let type: HTMLInputAttributes['type'];
    export let name: string = '';
    export let placeholder: string = '';
    export let spellcheck: boolean = true;
    export let value: string | null | undefined = '';
    export let maxlength: number | undefined = undefined;
    export let autocomplete: string = 'on';
    export let errorMessage: object | undefined = undefined;
</script>

<div>
    <label class="input input-bordered flex items-center gap-2">
        <input
                {name}
                {...{type}}
                dir="auto"
                bind:value
                {placeholder}
                {maxlength}
                {spellcheck}
                {autocomplete}
                {...$$restProps}
        >
    </label>
    {#if errorMessage}
        <p class="text-sm text-error ml-1">{errorMessage}</p>
    {/if}
</div>
