<script>
	import Button from '@smui/button';
	/** @type {import('./$types').PageData} */
	export let data;
	import Textfield from '@smui/textfield';
	import Card, { Content } from '@smui/card';
	import { goto } from '$app/navigation';
	let valueA = data.title;
	let value = data.content;

	async function editUav() {
		const res = await fetch(`http://127.0.0.1:8000/api/v1/uavs/${data.id}/`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NjQyMTQ2LCJpYXQiOjE2Njc2NDE4NDYsImp0aSI6ImYwMmJiNTY3ZTFjODQ1MDQ4MTI2MDA4ODM1YWY1ZWY4IiwidXNlcl9pZCI6Mn0.6eHPg5MObbOSXrDB3zLYCyLVQdFJlnCUXTS0x3a2qq8'
			},
			body: JSON.stringify({
				title: valueA,
				content: value
			})
		}).then((res) => {
			res.json();
			goto('/');
		});
	}
</script>

<div class="card-display">
	<div class="card-container">
		<Card padded>
			<Textfield variant="outlined" bind:value={valueA} label="Edit Title" />
			<br />
			<Textfield textarea input$maxlength={2500} bind:value label="Edit Content" />
			<br />
			<Button on:click={editUav}>Edit</Button>
		</Card>
	</div>
</div>
