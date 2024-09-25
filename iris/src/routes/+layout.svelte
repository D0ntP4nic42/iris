<script>
    import "tailwindcss/tailwind.css";
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Iris</title>
</svelte:head>

    <nav class="navbar">
        {#if !$page.data.user}
            <a class="link-hover ml-10 mr-10" href="/auth/login">Login</a>
            <a class="link-hover ml-10 mr-10" href="/auth/register">Registrar</a>
        {/if}

        {#if $page.data.user}
            <a class="link-hover" href="/protected/professor">Professor</a>
            <form action="?/logout" method="post">
                <button class="btn btn-primary" type="submit">LOGOUT</button>
            </form>
        {/if}
    </nav>

<main>
    <slot />
</main>
