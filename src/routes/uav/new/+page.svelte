<script lang="ts">
	import Textfield from '@smui/textfield';
	import Card from '@smui/card';
	import Button from '@smui/button';
	import { browser } from '$app/environment';
	import token from '../../../stores/auth';
	import { goto } from '$app/navigation';

	if (browser && !$token) {
		goto('/login');
	}

	let name = '';

	async function createUav() {
		const res = await fetch('http://localhost:8000/api/v1/uavs/', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${$token}`,
				'Content-Type': 'application/json'
			}
		});

		const fromEndpoint = await res.json();
	}
</script>

<svelte:head>
	<title>Create a UAV</title>
</svelte:head>

<div class="card-display max-w-xs mx-auto">
	<div class="card-container">
		<h1 class="h3 mb-3 fw-normal text-center">Add a new UAV</h1>

		<Card padded>
			<Textfield variant="outlined" value="" label="Name" />
			<Textfield class="mt-4" textarea input$maxlength={2500} value="" label="Content" />
			<Button class="mt-4" on:click={createUav}>Create</Button>
		</Card>
	</div>
</div>
