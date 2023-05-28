<script>
	import Header from '$lib/Header.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
	import { page } from '$app/stores';
	const churchId = $page.params.churchId;

	import TestUpload from '$lib/TestUpload.svelte';

	import { onMount } from 'svelte';
	import { churchviewService } from '../../../services/churchview-service';
	import { goto } from '$app/navigation';

	let churchList = [];
	let denominationList = [];

	onMount(async () => {
		churchList = await churchviewService.getChurches();
		denominationList = await churchviewService.getDenominations();
	});
</script>

<Header>
	<MainNavigator />
</Header>

<table class="table is-fullwidth">
	{#each churchList as church}
		{#if church._id == churchId}
			<thead>
				<th>Name</th>
				<th>Description</th>
				<th>Denomination Name</th>
				<th> More Details </th>
			</thead>
			<tbody>
				<tr>
					<td>
						{church.name}
					</td>
					<td>
						{church.description}
					</td>
					<td>
						{#each denominationList as denomination}
							{#if denomination._id == church.denominationid}
								{denomination.title}
							{/if}
						{/each}
					</td>
					<td>
						<a href="/churchlist/{church._id}" class="column">
							<i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)" /></a
						></td
					>
				</tr>
			</tbody>
		{:else}
			<!-- <h1> Church Not Found </h1> -->
		{/if}
	{/each}
</table>

<TestUpload />

{#each churchList as church}
	{#if church._id == churchId}
		<div class="card">
			<div class="card-image">
				<figure class="image is-256x256">
					<img src={church.img} alt="" />
				</figure>
			</div>
		</div>
	{/if}
{/each}
