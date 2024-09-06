<script lang="ts">
	import Login from '$lib/components/form/Login.svelte';
</script>

<div class="background">
	<div class="container w-75 h-75">
		<Login/>
	</div>
</div>

<style>
	.background {
		background-color: #003c71;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		position: relative;
		z-index: 2;
	}
</style>
