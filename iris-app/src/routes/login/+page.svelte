<script lang="ts">
    import Login from './LoginForm.svelte';
</script>

<div class="background">
    <div class="container w-75 h-75">
        <Login></Login>
    </div>
</div>

<style>
    .background {
        background-image: url('/img/cedlan.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>