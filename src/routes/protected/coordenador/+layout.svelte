<script>
    import "tailwindcss/tailwind.css";
    import { page } from "$app/stores";
</script>
<svelte:head>
    <title>Professor</title>
</svelte:head>
<div class="flex">
    <nav class="navbar m-auto bg-primary">
        <div class="prose select-none">
            <h1 class="text-base-100 ml-5 p-2 font-black">Íris <span class="ml-5">-</span></h1>
        </div>
        <a href="/protected/coordenador/register" class="btn btn-ghost text-start text-base-100">REGISTRAR</a>
        <!--TODO: colocar barra de logout justificada no end-->
        <form action="/auth/logout" method="get" class="">
            <button class="btn btn-ghost text-x1 text-base-100">LOGOUT</button>
        </form>
    </nav>

</div>
<main>
    <slot />
</main>