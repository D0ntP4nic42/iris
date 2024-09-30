<script lang="ts">
    import AlunosTable from "$lib/components/AlunosTable.svelte";
    import { page } from '$app/stores';


</script>
<div class="prose m-10">
    <h1>Bem vindo, <span class="text-primary">{$page.data.user.name}</span></h1>
</div>
