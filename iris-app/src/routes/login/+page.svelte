<script lang="ts">
    import Login from './LoginForm.svelte';
</script>

<div class="background">
    <div class="container w-75 h-75">
        <Login/>
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

    .background::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(100, 100, 100, 0.7); /* Change the color and opacity as needed */
        z-index: 1;
    }

    .container {
        position: relative;
        z-index: 2; /* Ensure the container content is above the overlay */
    }

</style>