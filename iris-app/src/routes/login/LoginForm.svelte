<script lang="ts">
	import IMask from 'imask';

	let cpfInput: string;
	let senhaInput: string;

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
			alert('Preencha todos os campos!');
			if (!cpfInput) {
				document.getElementById('cpfInput')?.focus();
			} else if (!senhaInput) {
				document.getElementById('senhaInput')?.focus();
			}
			return;
		} else {
			//tratamento de autenticação
			console.log(cpfInput, senhaInput);
		}
	}
</script>

<div class="container d-flex justify-content-center w-50 h-50">
	<form class="form-control form-container glass-effect" on:submit={fazerLogin}>
		<h1 class="text-center title roboto-bold">Sistema Acadêmico Íris</h1>

		<label id="cpfLabel" for="cpfInput" class="mt-3">CPF</label><br />
		<input
			class="form-control mb-3 input-group"
			id="cpfInput"
			type="text"
			placeholder="000.000.000-00"
			use:initializeMask
		/>

		<label class="mt-3" id="senhaLabel" for="senhaInput">SENHA</label><br />
		<input class="form-control mb-3 input-group" id="senhaInput" type="password" placeholder="" />

		<input type="submit" class="btn btn-primary mt-3 mb-3" value="Entrar" />
	</form>
</div>

<style>
	.input-group {
		background-color: #afaea2;
	}

	.form-container {
		padding: 20px;
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
