<script lang="ts">
    import Login from './Login.svelte'
</script>

<div class="background h-100 w-100">
    <div class="container w-75 h-75">
        <h1 class="text-center roboto-black title">Íris</h1>
        <Login></Login>
    </div>
</div>

<style>
    .background {
        background-image: url('/img/cedlan.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .title {
        color: #1351B4;
    }
</style>