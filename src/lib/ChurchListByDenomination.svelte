<svelte:options accessors={true}/>

<script>
	//@ts-nocheck
	import Chart from 'svelte-frappe-charts';
	import { onMount } from 'svelte';
	import { churchviewService } from '../services/churchview-service';
 
	export let chartOptions = ['line', 'bar', 'pie'];

	export let chartType;


	let churchesByDenomination = {
		labels: [],
		datasets: [
			{
				values: [0, 0]
			}
		],
	};


	function populateByDenomination(denominationList, churchList, chartType) {
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

    console.log(churchesByDenomination.datasets[0].chartType)
    churchesByDenomination.datasets[0].chartType = chartType
    console.log(churchesByDenomination.datasets[0].chartType)
  
	}
  let chartRef;

  async function updateChart() {
    churchesByDenomination = {
		labels: [],
		datasets: [
			{
				values: [0, 0]
			}
		],
	};
  console.log(churchesByDenomination);
  console.log(chartType)
  let churchList = await churchviewService.getChurches();
	let denominationList = await churchviewService.getDenominations();
	populateByDenomination(denominationList, churchList, chartType);
  }
 
  
  	async function refreshChart() {
		let churchList = await churchviewService.getChurches();
		let denominationList = await churchviewService.getDenominations();
		populateByDenomination(denominationList, churchList, chartType);
	};

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

<Chart data={churchesByDenomination} type={chartType} bind:this={chartRef} />

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

