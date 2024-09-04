<script lang="ts">
	// usar bcrypt para fazer hash das senhas
	import {fly, fade } from 'svelte/transition';
	import IMask from 'imask';

	let cpfInput: string;
	let senhaInput: string;
	let hasError : boolean;

	function initializeMask(node: HTMLInputElement) {
		IMask(node, {
			mask: '000.000.000-00'
		});
	}

	function fazerLogin(event: Event) {
		event.preventDefault();

		cpfInput = (document.getElementById('cpfInput') as HTMLInputElement).value;
		senhaInput = (document.getElementById('senhaInput') as HTMLInputElement).value;

		if (!cpfInput || !senhaInput) {

			if (!cpfInput) {
				document.getElementById('cpfInput')?.focus();
			} else if (!senhaInput) {
				document.getElementById('senhaInput')?.focus();
			}
			return hasError = true;
		} else {
			//tratamento de autenticação
			console.log(cpfInput, senhaInput);
			return hasError = false;
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
		<h1 class="text-center title roboto-black">Íris</h1>

		<label id="cpfLabel" for="cpfInput" class="mt-3 roboto-bold">CPF</label><br />
		<input
			class="form-control mb-3 input-group"
			id="cpfInput"
			type="text"
			name="cpf"
			placeholder="000.000.000-00"
			use:initializeMask
		/>

		<label class="mt-3 roboto-bold" id="senhaLabel" for="senhaInput">SENHA</label><br />
		<input class="form-control mb-3 input-group" id="senhaInput" name="senha" type="password" placeholder="" />
		{#if hasError}
			<div transition:fade={{delay: 150, duration:200}} class="container error-container">
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
		background-color: #E52207;
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
</style>
