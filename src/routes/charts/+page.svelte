<script>
	import Header from '$lib/Header.svelte';
	import MainNavigator from '$lib/MainNavigator.svelte';
  import ChurchListByDenomination from '$lib/ChurchListByDenomination.svelte';
  import ChurchListByProvince from '$lib/ChurchListByProvince-pie.svelte';
	import ChurchListByProvinceBar from '$lib/ChurchListByProvince-bar.svelte';
</script>

<Header>
	<MainNavigator />
</Header>

<div class="columns">
	<div class="column box has-text-centered">
		<h1 class="title is-4">Churches by Province</h1>
		<ChurchListByProvinceBar />
	</div>
	<div class="column has-text-centered">
		<h1 class="title is-4">Churches by Province: Pie Chart</h1>
		<ChurchListByProvince />
	</div>
	<div class="column has-text-centered">
		<h1 class="title is-4">Churches by Denomination: Bar Chart</h1>
		<ChurchListByDenomination />

	</div>
</div>
