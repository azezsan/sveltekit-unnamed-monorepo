<script>
	import { Button } from 'ui';

	let { data } = $props();
</script>

<div class="flex h-screen items-center justify-evenly">
	<Button>I'm a button!</Button>

	{#await data.users}
		<h3>fetching users...</h3>
	{:then users}
		{#each users as user}
			<div>{user.name}</div>
		{/each}
	{/await}
</div>
