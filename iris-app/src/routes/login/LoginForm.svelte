<script lang="ts">
	// usar bcrypt para fazer hash das senhas
	import { fly, fade } from 'svelte/transition';
	import IMask from 'imask';

	let cpfInput: string;
	let senhaInput: string;
	let hasError: boolean;

	function initializeMask(node: HTMLInputElement) {
		IMask(node, {
			mask: '000.000.000-00'
		});
	}

	function fazerLogin(event: Event) {
		event.preventDefault();

		document.getElementById('cpfInput')?.classList.remove('input-error');
		document.getElementById('senhaInput')?.classList.remove('input-error');

		if ((!cpfInput || cpfInput.length < 14) || !senhaInput) {
			if (!cpfInput || cpfInput.length < 14) {
				document.getElementById('cpfInput')?.focus();
				(document.getElementById('cpfInput') as HTMLInputElement).classList.add('input-error');
			}
			if (!senhaInput) {
				document.getElementById('senhaInput')?.focus();
				(document.getElementById('senhaInput') as HTMLInputElement).classList.add('input-error');
			}
			hasError = true;
		} else {
			// Handle authentication
			console.log(cpfInput, senhaInput);
			hasError = false;
		}
	}
</script>

<div class="container container-login d-flex justify-content-center w-50 h-75">
	<!--colocar action no form.-->
	<form method="POST" class="form-control form-container glass-effect" on:submit={fazerLogin}>
		<!--

		implementar quando a API já estiver pronta.
		{#if form?.missing}<p class="error">The email field is required</p>{/if}
		{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
		-->
		<h1 class="text-center title roboto-black" style="user-select: none">Íris</h1>

		<label id="cpfLabel" for="cpfInput" class="mt-3 roboto-bold">CPF</label><br />
		<input
			class="form-control mb-3 input-group input {cpfInput === '' ? 'input-error' : ''}"
			id="cpfInput"
			type="text"
			name="cpf"
			placeholder="000.000.000-00"
			bind:value={cpfInput}
			use:initializeMask
		/>

		<label class="mt-3 roboto-bold" id="senhaLabel" for="senhaInput">SENHA</label><br />
		<input
			class="form-control mb-3 input-group input {senhaInput === '' ? 'input-error' : ''}"
			id="senhaInput"
			name="senha"
			type="password"
			bind:value={senhaInput}
			placeholder=""
		/>

		{#if hasError}
			<div transition:fade={{ delay: 150, duration: 200 }} class="container error-container">
				<p class="error p-2">Preencha os campos corretamente.</p>
			</div>
		{/if}

		<input type="submit" class="btn btn-primary mt-3 mb-3 roboto-regular" value="Entrar" />
	</form>
</div>

<style>
	.input-group {
		background-color: #afaea2;
	}

	.error {
		user-select: none;
	}

	.error-container {
		background-color: var(--color-error);
		border-radius: 5px;
	}

	.form-container {
		padding: 20px;
		max-height: 75%;
	}

	.glass-effect {
		background-color: rgba(230, 230, 226, 0.5);
		backdrop-filter: blur(10px);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	.btn-primary {
		background-color: var(--color-primary);
	}

	.title {
		color: var(--color-primary);
	}

	.input {
		border: 1px solid #ccc;
		padding: 8px;
		border-radius: 4px;
	}

	.input-error {
		border: 1px solid var(--color-error);
	}
</style>
