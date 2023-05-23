<script>
  import Header from '$lib/Header.svelte';
  import ChurchList from '$lib/ChurchList.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';
	import ChurchMap from '$lib/ChurchMap.svelte';
</script>

<Header>
  <MainNavigator />
</Header>

<div class="columns">
  <div class="column has-text-centered">
    
      <ChurchMap />
  </div>
  <div class="column box has-text-centered">
      <h1 class="title is-4">Churches Visited</h1>
      <ChurchList />
  </div>
</div>