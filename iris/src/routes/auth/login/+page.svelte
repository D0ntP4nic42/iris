<script lang="ts">
    import type { PageData } from "./$types";
    import SuperDebug, { superForm } from "sveltekit-superforms";
    import Input from "$lib/components/Input.svelte";



    export let data: PageData

    const { form, errors } = superForm(data.form);
</script>

<SuperDebug data={$form}></SuperDebug>
<div data-theme="irisWhite" class="">
    <form method="post" class="form-control">
        <Input
            name="cpf"
            placeholder="000.000.000-00"
            type="text"
            spellcheck={false}
            autocomplete='no'
            maxlength={14}
            bind:value={$form.cpf}
            errorMessage={$errors.cpf}
        />
        <Input
            name="password"
            type="password"
            spellcheck={false}
            autocomplete='no'
            placeholder="Senha"
            bind:value={$form.password}
            errorMessage={$errors.password}
        />
        <button class="btn btn-primary" type="submit">Entrar</button>
    </form>
</div>