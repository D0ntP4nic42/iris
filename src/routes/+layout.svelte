<script>
    import "tailwindcss/tailwind.css";
    import { page } from "$app/stores";

</script>
<svelte:head>
    <title>Íris</title>
</svelte:head>

<div class="navbar">
    {#if !$page.data.user}
        <a href="/auth/login" class="btn btn-ghost text-x1">LOGIN</a>
    {/if}

    {#if $page.data.user}
        <form action="/auth/logout" method="get">
            <button class="btn btn-ghost text-x1">LOGOUT</button>
        </form>
    {/if}

    
</div>

<main>
    <slot />
</main>