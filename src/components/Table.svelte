<script lang="ts">
	import token from '../stores/auth';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import LinearProgress from '@smui/linear-progress';
	import Button from '@smui/button';

	export let items: any[] = [];
	export let loaded = false;

	async function deleteUav(id: number) {
		const res = await fetch(`http://localhost:8000/uavs/${id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${$token}`
			}
		});

		const fromEndpoint = await res.json();

		location.reload();
	}
</script>

<DataTable table$aria-label="User list" style="width: 100%;">
	<Head>
		<Row>
			<Cell numeric>ID</Cell>
			<Cell>Title</Cell>
			<Cell>Category</Cell>
			<Cell>Company</Cell>
			<Cell>Brand</Cell>
			<Cell>Actions</Cell>
		</Row>
	</Head>
	<Body>
		{#each items as item (item.id)}
			<Row>
				<Cell numeric>{item.id}</Cell>
				<Cell>{item.title}</Cell>
				<Cell>{item.category.name}</Cell>
				<Cell>{item.company.name}</Cell>
				<Cell>{item.brand.name}</Cell>
				<Cell>
					<a href={`/uav/${item.id}`}>Edit</a>
					<Button on:click={() => deleteUav(item.id)}>Delete</Button>
				</Cell>
			</Row>
		{/each}
	</Body>

	<LinearProgress
		indeterminate
		bind:closed={loaded}
		aria-label="Data is being loaded..."
		slot="progress"
	/>
</DataTable>
