<script lang="ts">
	import { Button } from '@acme/ui';

	let { data } = $props();
</script>

<div class="flex h-screen items-center justify-evenly">
	<Button>I'm a button from ui</Button>

	{#await data.users}
		<h2>fetching users...</h2>
	{:then users}
		<div class="flex flex-col gap-2">
			<h2>Users from db</h2>
			{#each users as user}
				<div>{user.name}</div>
			{/each}
		</div>
	{/await}
</div>
