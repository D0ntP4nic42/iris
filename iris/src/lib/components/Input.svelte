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
        <svg
                class="h-4 w-4 opacity-70"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
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
