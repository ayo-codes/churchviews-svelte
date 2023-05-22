<script>
  import Chart from "svelte-frappe-charts";
  import { onMount } from "svelte";
  import { churchviewService } from "../services/churchview-service";

  let churchesByProvince = {
		labels: ['Connacht', 'Leinster', 'Munster', 'Ulster'],
		datasets: [
			{
				values: [0, 0, 0, 0]
			}
		]
	};

  function populateByProvince(churchList) {
    churchList.forEach((church) => {
			if (church.province == 'Connacht') {
				churchesByProvince.datasets[0].values[0] += 1;
			} else if (church.province == 'Leinster') {
				churchesByProvince.datasets[0].values[1] += 1;
			} else if (church.province == 'Munster') {
				churchesByProvince.datasets[0].values[2] += 1;
			} else if (church.province == 'Ulster') {
				churchesByProvince.datasets[0].values[3] += 1;
			}
		});
  }

  async function refreshChart(){
		let churchList = await churchviewService.getChurches();
    populateByProvince(churchList);
  }

  onMount(async () => {
    refreshChart();
  });
</script>

<h1 class="title is-4">Churches by Provinces </h1>
<Chart data={churchesByProvince} type="pie" />

