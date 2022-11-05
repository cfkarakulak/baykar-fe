<script lang="ts">
	import Textfield from '@smui/textfield';
	import Card from '@smui/card';
	import Button from '@smui/button';

	let title = '';
	let content = '';

	async function createUav() {
		const res = await fetch(`http://localhost:8000/api/v1/uavs/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				content,
				createdAt: Date.now()
			})
		}).then((res) => {
			res.json();
		});
	}
</script>

<div class="card-display">
	<div class="card-container">
		<Card padded>
			<Textfield variant="outlined" value="" label="Title" />
			<br />
			<Textfield textarea input$maxlength={2500} value="" label="Content" />
			<br />
			<Button on:click={createUav}>Create</Button>
		</Card>
	</div>
</div>
