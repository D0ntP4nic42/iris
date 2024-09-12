<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition'
    import Input from '$lib/components/form/Input.svelte';
    import SuperDebug from "sveltekit-superforms";
    import { superForm } from "sveltekit-superforms/client";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { form, errors, enhance, message } = superForm(data.form, {
        resetForm: true
    });
</script>
<div class="background">
    <div class="container container-login d-flex justify-content-center w-50 h-75">
        <form method="POST" use:enhance class="form-control p-4 d-grid">
            <h1 class="text-center title roboto-black" style="user-select: none">Registro</h1>
            <SuperDebug data={$form}></SuperDebug>
            <Input
                    label="CPF"
                    type="text"
                    name="cpf"
                    placeholder="000.000.000-00"
                    maxlength={14}
                    bind:value={$form.cpf}
                    mask='000.000.000-00'
                    class="form-control input-group input"
                    errorMessage={$errors.cpf}
            />
            <Input
                    label="SENHA"
                    type="password"
                    name="password"
                    bind:value={$form.password}
                    placeholder=""
                    class="form-control input-group input"
                    errorMessage={$errors.password}
            />
            <Input
                    label="CONFIRME A SENHA"
                    type="password"
                    name="passwordConfirm"
                    bind:value={$form.confirmPassword}
                    placeholder=""
                    class="form-control input-group input"
                    errorMessage={$errors.confirmPassword}
            />
            <Input type="submit" value="Entrar" class="btn btn-primary roboto-bold" />
        </form>
    </div>
</div>
<style>
    .background {
        background-color: #003c71;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        position: relative;
        z-index: 2;
    }

    .title {
        color: var(--color-primary);
    }

</style>