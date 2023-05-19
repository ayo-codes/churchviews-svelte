<script>
  import Header from '$lib/Header.svelte';
  import DenominationList from '$lib/DenominationList.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';
</script>

<Header>
  <MainNavigator />
</Header>

<div class="columns">
  <div class="column has-text-centered">
      <img alt="Homer" src="/homer4.jpeg" width="300" />
  </div>
  <div class="column box has-text-centered">
      <h1 class="title is-4">Denominations Visited</h1>
      <DenominationList />
  </div>
</div>
