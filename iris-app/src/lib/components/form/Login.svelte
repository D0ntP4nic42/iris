<script lang="ts">
	import Input from '$lib/components/form/Input.svelte';
	import type { PageData } from './$types';

	let cpfInput: string;
	let passwordInput: string;

	/*    function fazerLogin(event: Event) {
        event.preventDefault();

        document.getElementById('cpfInput')?.classList.remove('input-error');
        document.getElementById('senhaInput')?.classList.remove('input-error');

        if ((!cpfInput || cpfInput.length < 14) || !passwordInput) {
            if (!cpfInput || cpfInput.length < 14) {
                document.getElementById('cpfInput')?.focus();
                (document.getElementById('cpfInput') as HTMLInputElement).classList.add('input-error');
            }
            if (!passwordInput) {
                document.getElementById('senhaInput')?.focus();
                (document.getElementById('senhaInput') as HTMLInputElement).classList.add('input-error');
            }
        } else {
            // Handle authentication
            console.log(cpfInput, passwordInput);
        }
    }*/
</script>

<div class="container container-login d-flex justify-content-center w-50 h-75">
	<form action="" class="form-control p-4 d-grid">
		<h1 class="text-center title roboto-black" style="user-select: none">Íris</h1>

		<Input
			label="CPF"
			type="text"
			name="cpf"
			placeholder="000.000.000-00"
			bind:value={cpfInput}
			mask="000.000.000-00"
			class="form-control input-group input"
		/>

		<Input
			label="SENHA"
			type="password"
			name="password"
			bind:value={passwordInput}
			placeholder=""
			class="form-control input-group input"
		/>

		<Input type="submit" value="Entrar" class="btn btn-primary roboto-bold" />
	</form>
</div>

<style>
	.input-group {
		background-color: #afaea2;
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
</style>
