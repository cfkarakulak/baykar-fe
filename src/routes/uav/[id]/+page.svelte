<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Button from '@smui/button';
	import Textfield from '@smui/textfield';
	import Card, { Content } from '@smui/card';
	import { browser } from '$app/environment';
	import token from '../../../stores/auth';
	import { goto } from '$app/navigation';

	if (browser && !$token) {
		goto('/login');
	}

	onMount(() => loadThing());

	let name = '';

	async function loadThing() {
		const res = await fetch('http://localhost:8000/api/v1/uavs/1/', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${$token}`,
				'Content-Type': 'application/json'
			}
		});

		let data = await res.json();

		name = data.name;
	}

	async function updateUAV() {
		const res = await fetch(`http://localhost:8000/api/v1/uavs/${$page.params.id}/`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${$token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: name
			})
		});

		const fromEndpoint = await res.json();
		goto('/uav');
	}
</script>

<svelte:head>
	<name>Update the UAV</name>
</svelte:head>

<div class="card-display max-w-xs mx-auto">
	<div class="card-container">
		<h1 class="h3 mb-3 fw-normal text-center">Update the UAV</h1>

		<Card padded>
			<Textfield variant="outlined" bind:value={name} label="Edit name" />
			<Button class="mt-4" on:click={updateUAV}>Update</Button>
		</Card>
	</div>
</div>
