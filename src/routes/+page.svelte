<script>
  import Header from '$lib/Header.svelte';
  import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
  <WelcomeNavigator />
</Header>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
      <img width="300" src="/homer.png" alt="homer" />
  </div>
  <div class="column">
      <h1 class="title">ChurchViews</h1>
      <p>Photos of Churches Across the world !</p>
  </div>
</div>
