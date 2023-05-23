<script>
	//@ts-nocheck
	import Chart from 'svelte-frappe-charts';
	import { onMount } from 'svelte';
	import { churchviewService } from '../services/churchview-service';

	export let chartOptions = ['line', 'bar', 'pie']; // used in the select options for chart

	export let chartType; // declares the chartType

	let chartContainer; 

	let toggled = false; // used in with  #key

  let chart = null;

	// sets data 
	let churchesByDenomination = {
		labels: [],
		datasets: [
			{
				values: [0, 0]
			}
		]
	};

	function populateByDenomination(denominationList, churchList) {
		churchesByDenomination.labels = [];
		denominationList.forEach((denomination) => {
			churchesByDenomination.labels.push(`${denomination.title}`);
			churchesByDenomination.datasets[0].values.push(0);
		});

		denominationList.forEach((denomination, i) => {
			churchList.forEach((church) => {
				if (church.denominationid == denomination._id) {
					churchesByDenomination.datasets[0].values[i] += 1;
				}
			});
		});
	};

	// when button to select chart type is picked
	async function updateChart() {
		toggled = !toggled;
		churchesByDenomination = {
			labels: [],
			datasets: [
				{
					values: [0, 0]
				}
			]
		};
		
		let churchList = await churchviewService.getChurches();
		let denominationList = await churchviewService.getDenominations();

		populateByDenomination(denominationList, churchList);

		chart = new Chart({
			target: chartContainer,
			props: {
				data: churchesByDenomination,
				type: chartType
			}
		});
	}

	async function refreshChart() {
		let churchList = await churchviewService.getChurches();
		let denominationList = await churchviewService.getDenominations();
		populateByDenomination(denominationList, churchList);

	}

	onMount(async () => {
		await refreshChart();
	


	});


</script>

<h1 class="title is-4">By Denomination</h1>

<!-- <div class="field">
  <div class="control">
    {#each chartOptions as chartOption}
    <label class="radio" for={chartOption}>
    <input bind:group={chartType} type="radio" id={chartOption} name={chartOption} value={chartOption} />
    {chartOption}
    </label>
    {/each}
  </div>
</div> -->

<!-- <Chart data={churchesByDenomination} type={chartType} bind:this={chartContainer} /> -->

{#key toggled}
	<div bind:this={chartContainer} />
{/key}

<!-- <Chart data={churchesByDenomination} type={chartType} bind:this={chartRef} /> -->

<div class="field">
	<div class="control">
		<select bind:value={chartType}>
			{#each chartOptions as chartType}
				<option>{chartType}</option>
			{/each}
		</select>
	</div>
</div>
<button on:click={updateChart}>Select Chart Type</button>
