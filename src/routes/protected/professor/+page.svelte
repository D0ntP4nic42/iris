<script lang="ts">
    import { page } from '$app/stores'
</script>

<svelte:head>
    <title>Home - Professor</title>
</svelte:head>

<div class="prose">
    <h1 class="mb-0">Bem vindo, <span class="text-primary">{$page.data.user.name}</span>.</h1>
    <p class="mt-0">Login efetuado como <span class="font-bold">{$page.data.user.role}</span></p>
</div>

