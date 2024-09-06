<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import IMask from 'imask';

	export let type: HTMLInputAttributes['type'];
	export let placeholder: string = '';
	export let name: string = '';
	export let label: string = '';
	export let spellcheck: boolean = true;
	export let value: string | null | undefined = '';
	export let maxlength: number | undefined = undefined;
	export let autocomplete: string = 'on';
	export let errorMessage: object | undefined = undefined;

	// variável ativa que muda de acordo com o valor digitado para calcular o tamanho do input
	$: valueLength = value?.length;

	// função opcional para implementar mask, exemplo de uso: formatação de cpf
	export let mask: string | null | undefined = '';
	$: maskProperties = mask ? mask : '';
	function initializeMask(node: HTMLInputElement) {
		if (maskProperties) {
			IMask(node, {
				mask: maskProperties
			});
		}
	}
</script>

<label class="roboto-bold mt-3 user-select-none">
	<div>
		<span>{label}</span>
		{#if maxlength}
			<span>
				{valueLength}/{maxlength}
			</span>
		{/if}
	</div>

	{#if errorMessage}
		<p>{errorMessage}</p>
	{/if}

	<input
		{name}
		{...{ type }}
		dir="auto"
		bind:value
		{maxlength}
		{spellcheck}
		{placeholder}
		{autocomplete}
		aria-label={label}
		aria-invalid={errorMessage ? 'true' : undefined}
		{...$$restProps}
		use:initializeMask
	/>
</label>
