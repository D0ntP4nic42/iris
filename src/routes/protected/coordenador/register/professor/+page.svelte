<script lang="ts">
    // TODO:
    // mostrar botao de confirmar registro antes de fazer a requisição.

    import type {PageData} from "./$types";
    import {superForm} from "sveltekit-superforms";
    import { imask } from '@imask/svelte';

    export let data: PageData
    const { form, errors, enhance, message } = superForm(data.form, {
        resetForm: true,

        taintedMessage: () => {
            return new Promise((resolve) => {
                window.confirm('Você deseja mesmo sair sem salvar as alterações?')
            })
        },

        onSubmit: ({ formElement, cancel }) => {
            showModal = true;

            return new Promise((resolve) => {
                resolveSubmit = resolve;
            }).then((confirmed) => {
                if (confirmed) {
                    formElement.submit();
                } else {
                    cancel();
                }
            });
        }
    });

    const options = {
        mask: '000{.}000{.}000{-}00',
        lazy: true
    };

    let showModal = false;
    let resolveSubmit: (value: boolean) => void;

    function confirmSubmit() {
        showModal = false;
        resolveSubmit(true);
    }

    function cancelSubmit() {
        showModal = false;
        resolveSubmit(false);
    }

    $: if (showModal) {
        const dialog = document.getElementById('modal_confirmar') as HTMLDialogElement;
        dialog.showModal();
    }
</script>

<svelte:head>
    <title>Cadastro - Professor</title>
</svelte:head>
<div class="justify-center">
    <div class="prose m-auto select-none">
        <h1 class="text-center text-primary m-10">*colocar um título legal*</h1>
        <form method="post" action="?/register" class="form-control" use:enhance>
            <div class="m-3">
                <label class="label-text" for="cpf">CPF</label>
                <label class="input input-bordered flex items-center gap-2">
                    <input
                            name="cpf"
                            type="text"
                            class="grow"
                            placeholder="000.000.000-00"
                            spellcheck="false"
                            autocomplete="off"
                            maxlength={14}
                            bind:value={$form.cpf}
                            use:imask={options}
                    />
                    <svg
                            class="h-4 w-4 opacity-70"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>


                </label>
                {#if $errors.cpf}
                    <p class="text-error text-sm m-0 ml-1 mt-2">{$errors.cpf}</p>
                {/if}
            </div>
            <div class="m-3">
                <label class="label-text" for="name">Nome</label>
                <label class="input input-bordered flex items-center gap-2">
                    <input
                            name="name"
                            type="text"
                            class="grow"
                            placeholder="John Doe"
                            spellcheck="false"
                            autocomplete="off"
                            bind:value={$form.name}
                    />
                    <svg
                            class="h-4 w-4 opacity-70"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                    </svg>
                </label>
                {#if $errors.name}
                    <p class="text-error text-sm m-0 ml-1 mt-2">{$errors.name}</p>
                {/if}
            </div>
            <div class="m-3">
                <label class="label-text" for="Senha">Senha</label>
                <label class="input input-bordered flex items-center gap-2">
                    <input
                            name="password"
                            type="password"
                            class="grow"
                            placeholder="Senha"
                            spellcheck="false"
                            autocomplete="off"
                            bind:value={$form.password}
                    />
                    <svg
                            class="h-4 w-4 opacity-70"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                    </svg>
                </label>
                {#if $errors.password}
                    <p class="text-error text-sm m-0 ml-1 mt-2">{$errors.password}</p>
                {/if}
            </div>
            <div class="m-3">
                <label class="label-text" for="confirm">Confirmar senha</label>
                <label class="input input-bordered flex items-center gap-2">
                    <input
                            name="confirm"
                            type="password"
                            class="grow"
                            placeholder="Confirmar senha"
                            spellcheck="false"
                            autocomplete="off"
                            bind:value={$form.confirm}
                    />
                    <svg
                            class="h-4 w-4 opacity-70"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                    </svg>
                </label>
                {#if $errors?._errors}
                    <p class="text-error text-sm  mt-2">{$errors?._errors}</p>
                {/if}
            </div>
            <button class="btn btn-primary m-3" type="submit">Registrar Professor</button>
        </form>
        <dialog id="modal_confirmar" class="modal">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Aviso:</h3>
                <p class="py-4">Ao confirmar esse diálogo, as alterações serão confirmadas, verifique se os dados estão realmente corretos antes de confirmar.</p>
                <div class="modal-action">
                    <form method="dialog">
                        <button class="btn" on:click={confirmSubmit}>Confirmar</button>
                        <button class="btn" on:click={cancelSubmit}>Cancelar</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
</div>