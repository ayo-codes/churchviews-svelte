<script>
  import Header from '$lib/Header.svelte';
  import ChurchForm from '$lib/ChurchForm.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';
</script>

<Header>
  <MainNavigator />
</Header>

<div class="columns is-vcentered">
  <div class="column has-text-centered">
      <img alt="Homer" src="/homer3.png" width="300" />
  </div>
  <div class="column box has-text-centered">
      <h1 class="title is-4">Add a Church!</h1>
      <ChurchForm />
  </div>
</div>