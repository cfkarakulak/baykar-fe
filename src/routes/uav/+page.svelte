<script lang="ts">
	import { onMount } from 'svelte';
	import Table from '../../components/Table.svelte';

	type Uav = {
		createdAt: Date;
		image: any;
		content: string;
		title: string;
		id: number;
	};

	let items: Uav[] = [];
	let loaded = false;

	onMount(() => loadThings(false));

	function loadThings(wait: boolean) {
		if (typeof fetch !== 'undefined') {
			loaded = false;

			fetch('http://localhost:8000/api/v1/uavs/', {
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NjQyMTQ2LCJpYXQiOjE2Njc2NDE4NDYsImp0aSI6ImYwMmJiNTY3ZTFjODQ1MDQ4MTI2MDA4ODM1YWY1ZWY4IiwidXNlcl9pZCI6Mn0.6eHPg5MObbOSXrDB3zLYCyLVQdFJlnCUXTS0x3a2qq8'
				}
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (json) {
					items = json.results;
					loaded = true;
				});
		}
	}
</script>

<div>
	<a href="/uav/new">Add New</a>
</div>

<Table {items} {loaded} />
