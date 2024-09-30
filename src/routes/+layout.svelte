<script>
    // Essa é a página geral da aplicação, servindo para colocar a navegação do usuário
    // TODO:
    // Devemos fazer uma aba layout para navegação específica para cada rota dependendo
    // do nível de acesso do usuário.

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
            <form action="/auth/logout" method="post">
                <button class="link hover ml-10 mr-10" type="submit">LOGOUT</button>
            </form>
        {/if}
    </nav>

<main>
    <slot />
</main>
