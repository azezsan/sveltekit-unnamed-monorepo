<script>
	import { Button } from 'ui';

	let open = $state(false);
	let { data } = $props();
</script>

<div class="flex h-screen items-center justify-evenly">
	<Button onclick={() => (open = true)}>Welcome to bun svelte!</Button>

	{#await data.users}
		<h3>fetching users...</h3>
	{:then users}
		{#each users as user}
			<div>{user.name}</div>
		{/each}
	{/await}
</div>
